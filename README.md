# Site public de Biblib

GitHub Pages publie la branche `main` à l’adresse <https://bublex.github.io/biblib-site/>.

- Les fichiers HTML et les gabarits Jekyll définissent le site vitrine.
- Les pages `confidentialite.md` et `telephone.md` restent aux adresses utilisées par l’application et les boutiques.
- L’annuaire liste les réseaux du projet Biblib et leurs bibliothèques. La liste vient de `_data/annuaire.json`. Le script `assets/annuaire.js` la filtre dans le navigateur.
- Les questions et signalements passent par l’adresse felix-biblib@posteo.net ou par [les tickets GitHub](https://github.com/Bublex/biblib-site/issues).

Le générateur `tools/site.mjs` du projet Biblib écrit seulement `confidentialite.md` et `telephone.md`, à partir de `PRIVACY.md` et `docs/telephone.md`. Modifie ces deux pages dans le projet Biblib, puis lance le générateur. Les autres fichiers appartiennent à ce dépôt.

Pour mettre à jour l’annuaire, lance `node tools/annuaire.mjs ../biblib` (chemin du projet Biblib). Le script lit les réseaux (`extension/lib/libraries.js`) et les bibliothèques (`extension/lib/establishments-data.js`), puis écrit `_data/annuaire.json`. Il garde le titre, le nom et le lien des réseaux déjà présents, qui sont relus à la main.
