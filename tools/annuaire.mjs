// Écrit _data/annuaire.json, la liste de la page Bibliothèques : chaque réseau, puis ses bibliothèques.
// Usage : node tools/annuaire.mjs [dossier du projet Biblib, par défaut ../biblib]
// Sources (projet Biblib) : extension/lib/libraries.js (réseaux) et extension/lib/establishments-data.js
// (bibliothèques, d'après l'Observatoire de la lecture publique). Le titre, le nom et le lien d'un réseau déjà
// présent dans _data/annuaire.json restent tels quels : ils sont relus à la main. Un nouveau réseau prend son nom court.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const site = resolve(new URL('..', import.meta.url).pathname);
const biblib = resolve(process.argv[2] || join(site, '../biblib'));
const load = (file) => import(pathToFileURL(join(biblib, 'extension/lib', file)).href);
const { LIBRARIES } = await load('libraries.js');
const { ESTABLISHMENTS } = await load('establishments-data.js');

const out = join(site, '_data/annuaire.json');
const before = new Map(existsSync(out) ? JSON.parse(readFileSync(out, 'utf8')).reseaux.map((r) => [r.id, r]) : []);

// Même pliage que assets/annuaire.js : sans accents, en minuscules, mots séparés par une espace.
const fold = (...parts) => parts.join(' ').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
  .replace(/œ/g, 'oe').replace(/æ/g, 'ae').replace(/[^a-z0-9]+/g, ' ').trim();
const words = (...parts) => [...new Set(fold(...parts).split(' '))].join(' ');
const typo = (text) => text.replace(/'/g, '’');

const networks = LIBRARIES.map((lib) => {
  const old = before.get(lib.id);
  return { id: lib.id, titre: old?.titre || lib.short, nom: old?.nom || lib.name, catalogue: old?.catalogue || lib.base, ville: lib.city };
});
const byId = new Map(networks.map((n) => [n.id, { ...n, bibliotheques: [] }]));

// Une bibliothèque de plusieurs réseaux (Mériadeck : Bordeaux et Bordeaux Métropole) va dans le plus précis,
// celui qui compte le moins de bibliothèques, comme dans l'app. Sa recherche garde le nom de tous ses réseaux.
const count = new Map();
for (const e of ESTABLISHMENTS) for (const id of e[6].split(' ')) count.set(id, (count.get(id) || 0) + 1);
for (const [, name, city, cp, , , libs] of ESTABLISHMENTS) {
  const ids = libs.split(' ').filter((id) => byId.has(id));
  if (!ids.length) continue;
  const home = [...ids].sort((a, b) => count.get(a) - count.get(b))[0];
  const nets = ids.map((id) => byId.get(id));
  byId.get(home).bibliotheques.push([typo(name), city, cp, words(name, city, cp, ...nets.map((n) => `${n.titre} ${n.ville}`)), fold(city)]);
}

const collator = new Intl.Collator('fr');
const reseaux = [...byId.values()].sort((a, b) => collator.compare(a.titre, b.titre)).map(({ ville, bibliotheques, ...n }) => ({
  ...n,
  recherche: words(n.titre, ville, n.nom),
  bibliotheques: bibliotheques.sort((a, b) => collator.compare(a[1], b[1]) || collator.compare(a[0], b[0])),
}));
writeFileSync(out, `${JSON.stringify({ reseaux }, null, 0).replace(/\},\{"id"/g, '},\n{"id"')}\n`);
console.log(`${reseaux.length} réseaux, ${reseaux.reduce((s, r) => s + r.bibliotheques.length, 0)} bibliothèques → ${out}`);
