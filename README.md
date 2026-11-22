# Site public de Biblib

GitHub Pages publie la branche `main` à l’adresse <https://bublex.github.io/biblib-site/>.

- Les fichiers HTML et les gabarits Jekyll définissent le site vitrine.
- Les pages `confidentialite.md` et `telephone.md` restent aux adresses utilisées par l’application et les boutiques.
- L’annuaire reprend les réseaux du projet Biblib. La page contient la liste des réseaux. Le script filtre la liste dans le navigateur.
- Les questions et signalements passent par [l’assistance sur GitHub](https://github.com/Bublex/biblib-site/issues).

Le générateur `tools/site.mjs` du projet Biblib écrit seulement `confidentialite.md` et `telephone.md`, à partir de `PRIVACY.md` et `docs/telephone.md`. Modifie ces deux pages dans le projet Biblib, puis lance le générateur. Les autres fichiers appartiennent à ce dépôt.

Les codes postaux de l’annuaire viennent des établissements du projet Biblib (`extension/lib/establishments-data.js`).
