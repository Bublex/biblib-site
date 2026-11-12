---
title: "Politique de confidentialité"
---

# Politique de confidentialité de Biblib

*Dernière mise à jour : 12 novembre 2026*

Biblib est une extension Chrome qui indique, sur la fiche d'un livre, d'un CD, d'un DVD ou d'un jeu de société consultée en ligne, s'il est présent et disponible dans les bibliothèques publiques que vous avez choisies. Pour les films et séries, l'extension interroge aussi séparément le catalogue public de Médiathèque Numérique ; cette source est active par défaut et se désactive dans les réglages. L'app iPhone Biblib fait de même pour un livre dont vous scannez le code-barres ; elle est décrite [plus bas](#lapp-iphone).

## En résumé

Biblib ne collecte aucune donnée personnelle. Il n'existe ni compte Biblib, ni serveur Biblib, ni statistiques d'utilisation. Vos réglages restent sur votre appareil.

## Ce que l'extension lit

Sur les sites listés dans l'extension (livres, disques, films et jeux de société : par exemple Amazon, Babelio, Fnac, Allociné, IMDb, Philibert), Biblib lit dans la page l'ISBN, le titre et l'auteur du livre affiché (pour un CD ou un DVD : l'EAN, c'est-à-dire le code-barres, le titre, l'artiste ou le réalisateur ; pour un jeu : l'EAN, le titre et l'auteur du jeu). Rien d'autre n'est lu, et rien n'est lu sur les autres sites.

## Ce que l'extension envoie, et à qui

Quand un livre, un CD, un DVD ou un jeu est détecté, Biblib envoie son ISBN ou son EAN, son titre et son auteur **uniquement aux catalogues des bibliothèques que vous avez cochées** dans les réglages, pour savoir s'il y est et s'il est disponible. Ces requêtes partent directement de votre navigateur vers le site de la bibliothèque, sans passer par un intermédiaire, et sans indiquer la page d'où vous venez.

Tant que la source Médiathèque Numérique est active (par défaut ; désactivable dans les réglages), Biblib envoie le titre des films et séries (puis leur titre original s'il ne donne rien) à l’API publique de Médiathèque Numérique ; le réalisateur et l’année servent seulement à vérifier les résultats, sur votre appareil. La recherche est sans authentification et sans cookie. Le service reçoit votre adresse IP. Le résultat indique la présence d’un programme au catalogue public et son indicateur de quota ; il ne confirme ni l’abonnement de votre bibliothèque, ni les crédits disponibles sur votre compte. Pour utiliser le programme, votre bibliothèque doit proposer l’accès à Médiathèque Numérique.

Comme pour toute visite d'un site web, la bibliothèque interrogée reçoit votre adresse IP ; ses propres règles de confidentialité s'appliquent. Certains catalogues déposent un cookie technique de session, nécessaire à leur fonctionnement.

Aucune donnée n'est envoyée au développeur de Biblib ni vendue. Les données de recherche ne sont transmises qu'aux catalogues décrits ci-dessus, selon les sources que vous avez activées, et ne sont pas partagées à des fins publicitaires.

## Ce que l'extension enregistre

Dans le stockage local de Chrome (`chrome.storage.local`), sur votre appareil uniquement :

- la liste des bibliothèques que vous avez choisies ;
- vos annexes favorites, et les noms des annexes vues dans les résultats (pour vous les proposer comme favorites) ;
- vos préférences d'affichage et les sites où vous avez masqué Biblib.
- votre choix de garder ou non la recherche Médiathèque Numérique.

Ces réglages ne sont pas synchronisés avec votre compte Google. Les résultats de recherche sont gardés 15 minutes en mémoire de session et effacés à la fermeture du navigateur. Désinstaller l'extension supprime toutes ces données.

## Réservation

La réservation se fait sur le site de la bibliothèque, avec votre compte lecteur. Biblib ne voit ni votre numéro de carte, ni votre mot de passe, ni vos prêts.

## Autorisations

- **Stockage** : mémoriser vos réglages sur votre appareil.
- **Accès aux sites listés (livres, disques, films, jeux)** : lire l'ISBN (ou l'EAN), le titre et l'auteur du livre, du CD, du DVD ou du jeu affiché, et afficher la pastille de disponibilité.
- **Accès aux catalogues des bibliothèques** : demandé une bibliothèque à la fois, au moment où vous la cochez, et retiré quand vous la décochez.
- **Accès à Médiathèque Numérique** : facultatif, demandé avec l'accès à votre première bibliothèque (ou depuis les réglages), et retiré lorsque vous désactivez cette source. Aucun identifiant ni cookie Médiathèque Numérique n’est collecté ou stocké par Biblib.
- **Modification d'en-têtes** : retirer l'en-tête « Origin » des seules requêtes de Biblib vers Médiathèque Numérique, que ce service refuse sinon. Les pages web que vous visitez ne sont ni modifiées ni bloquées.

## L'app iPhone

L'app suit les mêmes principes que l'extension : ni compte, ni serveur Biblib, ni statistiques, ni publicité.

- **Appareil photo** : il sert uniquement à lire le code-barres au dos d'un livre, d'un DVD, d'un CD ou d'un jeu. L'image est analysée sur le téléphone ; elle n'est ni enregistrée, ni envoyée.
- **Ce qui est envoyé** : l'ISBN du livre scanné, ou l'EAN d'un DVD, d'un CD, d'un jeu (ou le texte que vous saisissez) part vers les catalogues des bibliothèques que vous avez cochées, directement depuis le téléphone, et vers les sources de titres et de couvertures décrites ci-dessous. Rien d'autre n'est envoyé : ni votre nom, ni votre position, ni la liste de vos recherches. Si cette édition n'y est pas et que l'option « chercher par titre et auteur » est active, l'ISBN est aussi envoyé au catalogue général de la Bibliothèque nationale de France (catalogue.bnf.fr) pour obtenir le titre et l'auteur, qui sont ensuite cherchés dans vos catalogues. L'EAN d'un DVD, d'un CD ou d'un jeu est toujours envoyé à la BnF, une seule fois par code : il ne dit pas de quelle œuvre il s'agit, la BnF (qui reçoit le dépôt légal des vidéos et des disques) en donne le titre, l'auteur ou le réalisateur, et le support.
- **Titre et couverture** : le code-barres d'un livre, d'un DVD ou d'un CD est d'abord envoyé à leslibraires.fr (réseau de librairies indépendantes), dont la fiche donne le titre, l'auteur, le support et la couverture, y compris pour les nouveautés que la BnF n'a pas encore cataloguées. Si elle n'a pas de couverture, l'ISBN d'un livre est envoyé à Google Books, puis à Open Library ; l'EAN d'un CD à MusicBrainz, puis à Cover Art Archive. Chaque code n'est envoyé qu'une fois par œuvre. Une œuvre ajoutée par un lien prend l'image de sa page, sans autre requête.
- **Position** : quand vous appuyez sur « Bibliothèques autour de moi », l'app demande votre position (approximative par défaut) pour trier les bibliothèques par distance. Le calcul se fait sur le téléphone : la position n'est ni envoyée, ni enregistrée.
- **Films et séries** : comme dans l'extension, et tant que l'option est active (par défaut, désactivable dans les réglages de l'app), le titre d'un film ou d'une série est aussi envoyé à l'API publique de Médiathèque Numérique, sans compte ni cookie.
- **Partage depuis une autre app** : quand vous partagez une page avec Biblib (bouton Partager d'Allociné, de Babelio, de Safari…), l'app télécharge cette page depuis le téléphone pour y lire le titre, l'auteur et l'ISBN ou l'EAN, comme l'extension sur la page ouverte dans Chrome. Seule la page partagée est demandée, à son propre site ; la recherche part ensuite vers vos catalogues comme pour un livre scanné.
- **Ce qui est enregistré sur le téléphone** : vos bibliothèques, vos annexes favorites, l'option de recherche par titre, et la liste des livres scannés avec leur dernier résultat. Le bouton « Effacer les livres scannés » des réglages vide cette liste ; supprimer l'app efface tout.
- Comme pour l'extension, chaque catalogue interrogé reçoit votre adresse IP et peut déposer un cookie technique de session ; la réservation se fait sur le site de la bibliothèque, avec votre compte lecteur.

## Indépendance

Biblib n'est affilié à aucune bibliothèque ni à aucun des sites cités.

## Contact

Pour toute question : [ouvrez un ticket sur GitHub](https://github.com/Bublex/biblib-site/issues).

---

## English summary

Biblib collects no personal data: no account, no server, no analytics. Settings are stored locally (`chrome.storage.local`, not synced). On supported book, music, film and board game sites, the extension reads the ISBN (or EAN for a CD, DVD or board game), title and author of the displayed item and sends them only to the public catalogs of the libraries the user selected, directly from the browser, to check availability. Unless the user turns off Médiathèque Numérique (on by default), film or series titles (and original titles if needed) are also sent to its public API without authentication or cookies. A catalogue match does not confirm that the user's library subscribes or that the user's account has remaining credits. Nothing is sent to the developer, sold, or shared for any other purpose.

The iPhone app uses the camera only to read a book's barcode on the device; images are neither stored nor sent. The scanned ISBN or EAN is sent to the selected library catalogs and, to identify the item, to the French National Library catalog (catalogue.bnf.fr). To get the title and cover, the barcode is also sent to leslibraires.fr (a network of independent bookshops), then if needed to Google Books and Open Library (books) or MusicBrainz and Cover Art Archive (CDs). Location is requested only for "libraries near me", is used on the phone to sort libraries by distance, and is neither sent nor stored. Settings, favorites and the list of scanned books are stored on the phone only.
