---
title: "Politique de confidentialité"
description: "Biblib ne collecte aucune donnée personnelle. Voici ce que l’extension Chrome et l’app iPhone lisent, envoient et enregistrent."
---

# Politique de confidentialité de Biblib

*Dernière mise à jour : 22 novembre 2026*

Biblib est une extension Chrome qui indique, sur la fiche d'un livre, d'un CD, d'un DVD ou d'un jeu de société consultée en ligne, s'il est présent et disponible dans les bibliothèques publiques que tu as choisies. Pour les films et séries, l'extension interroge aussi séparément le catalogue public de Médiathèque Numérique ; cette source est active par défaut et se désactive dans les réglages. L'app iPhone Biblib fait de même pour un livre dont tu scannes le code-barres ; elle est décrite [plus bas](#lapp-iphone).

## En résumé

Biblib ne collecte aucune donnée personnelle. Il n'existe ni compte Biblib, ni serveur Biblib, ni statistiques d'utilisation. Tes réglages restent sur ton appareil.

## Ce que l'extension lit

Sur les sites listés dans l'extension (livres, disques, films et jeux de société : par exemple Amazon, Babelio, Fnac, Allociné, IMDb, Philibert), Biblib lit dans la page l'ISBN, le titre et l'auteur du livre affiché (pour un CD ou un DVD : l'EAN, c'est-à-dire le code-barres, le titre, l'artiste ou le réalisateur ; pour un jeu : l'EAN, le titre et l'auteur du jeu). Rien d'autre n'est lu, et rien n'est lu sur les autres sites.

## Ce que l'extension envoie, et à qui

Quand un livre, un CD, un DVD ou un jeu est détecté, Biblib envoie son ISBN ou son EAN, son titre et son auteur **uniquement aux catalogues des bibliothèques que tu as cochées** dans les réglages, pour savoir s'il y est et s'il est disponible. Ces requêtes partent directement de ton navigateur vers le site de la bibliothèque, sans passer par un intermédiaire, et sans indiquer la page d'où tu viens.

Tant que la source Médiathèque Numérique est active (par défaut ; désactivable dans les réglages), Biblib envoie le titre des films et séries (puis leur titre original s'il ne donne rien) à l’API publique de Médiathèque Numérique ; le réalisateur et l’année servent seulement à vérifier les résultats, sur ton appareil. La recherche est sans authentification et sans cookie. Le service reçoit ton adresse IP. Le résultat indique la présence d’un programme au catalogue public et son indicateur de quota ; il ne confirme ni l’abonnement de ta bibliothèque, ni les crédits disponibles sur ton compte. Pour utiliser le programme, ta bibliothèque doit proposer l’accès à Médiathèque Numérique.

Comme pour toute visite d'un site web, la bibliothèque interrogée reçoit ton adresse IP ; ses propres règles de confidentialité s'appliquent. Certains catalogues déposent un cookie technique de session, nécessaire à leur fonctionnement.

Aucune donnée n'est envoyée au développeur de Biblib ni vendue. Les données de recherche ne sont transmises qu'aux catalogues décrits ci-dessus, selon les sources que tu as activées, et ne sont pas partagées à des fins publicitaires.

## Bibliothèques autour de moi

Dans les réglages, le bouton « Autour de moi » propose les bibliothèques prises en charge proches de toi. Chrome te demande alors l'autorisation de donner ta position à Biblib ; tu peux refuser et chercher ta ville à la place. La position sert à un seul calcul, fait sur ton appareil : sa distance aux communes desservies par chaque réseau, dont la liste est incluse dans l'extension. Elle n'est envoyée à personne (ni au développeur, ni aux bibliothèques) et n'est pas enregistrée. Chrome peut s'appuyer sur un service de localisation de ton système ou de Google pour la déterminer, selon ses propres règles.

## Ce que l'extension enregistre

Dans le stockage local de Chrome (`chrome.storage.local`), sur ton appareil uniquement :

- la liste des bibliothèques que tu as choisies ;
- tes annexes favorites, et les noms des annexes vues dans les résultats (pour te les proposer comme favorites) ;
- tes préférences d'affichage et les sites où tu as masqué Biblib ;
- ton choix de garder ou non la recherche Médiathèque Numérique.

Ces réglages ne sont pas synchronisés avec ton compte Google. Les résultats de recherche sont gardés 15 minutes en mémoire de session et effacés à la fermeture du navigateur. Désinstaller l'extension supprime toutes ces données.

## Réservation

La réservation se fait sur le site de la bibliothèque, avec ton compte lecteur. Biblib ne voit ni ton numéro de carte, ni ton mot de passe, ni tes prêts.

## Autorisations

- **Stockage** : mémoriser tes réglages sur ton appareil.
- **Accès aux sites listés (livres, disques, films, jeux)** : lire l'ISBN (ou l'EAN), le titre et l'auteur du livre, du CD, du DVD ou du jeu affiché, et afficher la pastille de disponibilité.
- **Accès aux catalogues des bibliothèques** : demandé une bibliothèque à la fois, au moment où tu la coches, et retiré quand tu la décoches.
- **Accès à Médiathèque Numérique** : facultatif, demandé avec l'accès à ta première bibliothèque (ou depuis les réglages), et retiré lorsque tu désactives cette source. Aucun identifiant ni cookie Médiathèque Numérique n’est collecté ou stocké par Biblib.
- **Position** : aucune autorisation n'est inscrite à l'extension. Chrome te la demande au premier clic sur « Autour de moi », comme le ferait un site web ; tu peux la retirer dans les réglages de Chrome (Confidentialité et sécurité, Paramètres des sites, Position).
- **Modification d'en-têtes** : retirer l'en-tête « Origin » des seules requêtes de Biblib vers Médiathèque Numérique, que ce service refuse sinon. Les pages web que tu visites ne sont ni modifiées ni bloquées.

## L'app iPhone

L'app suit les mêmes principes que l'extension : ni compte, ni serveur Biblib, ni statistiques, ni publicité.

- **Appareil photo** : il sert uniquement à lire le code-barres au dos d'un livre, d'un DVD, d'un CD ou d'un jeu. L'image est analysée sur le téléphone ; elle n'est ni enregistrée, ni envoyée.
- **Ce qui est envoyé** : l'ISBN du livre scanné, ou l'EAN d'un DVD, d'un CD, d'un jeu (ou le texte que tu saisis) part vers les catalogues des bibliothèques que tu as cochées, directement depuis le téléphone, et vers les sources de titres et de couvertures décrites ci-dessous. Rien d'autre n'est envoyé : ni ton nom, ni ta position, ni la liste de tes recherches. Si cette édition n'y est pas et que l'option « chercher par titre et auteur » est active, l'ISBN est aussi envoyé au catalogue général de la Bibliothèque nationale de France (catalogue.bnf.fr) pour obtenir le titre et l'auteur, qui sont ensuite cherchés dans tes catalogues. L'EAN d'un DVD, d'un CD ou d'un jeu est toujours envoyé à la BnF, une seule fois par code : il ne dit pas de quelle œuvre il s'agit, la BnF (qui reçoit le dépôt légal des vidéos et des disques) en donne le titre, l'auteur ou le réalisateur, et le support.
- **Films et séries** : comme dans l'extension, et tant que l'option est active (par défaut, désactivable dans les réglages de l'app), le titre d'un film ou d'une série est aussi envoyé à l'API publique de Médiathèque Numérique, sans compte ni cookie.
- **Partage depuis une autre app** : quand tu partages une page avec Biblib (bouton Partager d'Allociné, de Babelio, de Safari…), l'app télécharge cette page depuis le téléphone pour y lire le titre, l'auteur et l'ISBN ou l'EAN, comme l'extension sur la page ouverte dans Chrome. Seule la page partagée est demandée, à son propre site ; la recherche part ensuite vers tes catalogues comme pour un livre scanné. Un lien collé dans le champ de recherche (fiche Fnac, Amazon, Babelio…) est traité de la même façon.
- **Titre et couverture** : le code-barres d'un livre, d'un DVD ou d'un CD est d'abord envoyé à leslibraires.fr (réseau de librairies indépendantes), dont la fiche donne le titre, l'auteur, le support et la couverture, y compris pour les nouveautés que la BnF n'a pas encore cataloguées. Si elle n'a pas de couverture, l'ISBN d'un livre est envoyé à Google Books (googleapis.com), puis, s'il n'y a pas d'image, à Open Library (covers.openlibrary.org). Pour un CD, l'EAN est envoyé à MusicBrainz (musicbrainz.org), puis l'image demandée à Cover Art Archive (coverartarchive.org). Une seule demande par œuvre, sans compte, sans cookie et sans autre information ; l'adresse de l'image est gardée avec l'œuvre, sur le téléphone. Une œuvre ajoutée par une page partagée ou un lien collé prend l'image de cette page : l'image est alors demandée au site de la page.
- **Cartes de bibliothèque** : tu peux enregistrer dans l'app le numéro de ta carte de bibliothèque (saisi, ou lu sur la carte avec l'appareil photo, sur le téléphone), son titulaire et sa date de fin de validité, pour afficher son code-barres à la borne de prêt. Ces informations restent sur le téléphone : elles ne sont envoyées à personne, ni au développeur, ni aux bibliothèques. Le rappel « carte à renouveler », un mois avant la fin de validité, est une notification programmée par le téléphone lui-même, sans serveur ; iOS te demande l'autorisation des notifications quand tu indiques une date. Pour afficher le code-barres plus lisiblement, l'app met l'écran en pleine luminosité, puis la rétablit.
- **Position** : seulement quand tu touches « Bibliothèques autour de moi », et seulement si tu l'autorises (iOS propose par défaut la position approximative, qui suffit). Elle sert à classer les bibliothèques prises en charge par distance, sur le téléphone ; elle n'est ni envoyée ni enregistrée, et l'app ne la demande jamais en arrière-plan.
- **Ce qui est enregistré sur le téléphone** : tes bibliothèques, tes annexes favorites, l'option de recherche par titre, la liste des livres scannés avec leur dernier résultat, ceux que tu as enregistrés et l'adresse de leur couverture, et tes cartes de bibliothèque. La disponibilité des livres enregistrés est vérifiée de nouveau quand tu ouvres l'app, auprès de tes catalogues seulement, comme une recherche ordinaire. Une recherche se supprime d'un glissement vers la gauche ; le bouton « Effacer les livres scannés » des réglages vide toute la liste ; supprimer l'app efface tout.
- Comme pour l'extension, chaque catalogue interrogé reçoit ton adresse IP et peut déposer un cookie technique de session ; la réservation se fait sur le site de la bibliothèque, avec ton compte lecteur.

## Indépendance

Biblib n'est affilié à aucune bibliothèque ni à aucun des sites cités.

## Contact

Pour toute question, écris à [felix-biblib@posteo.net](mailto:felix-biblib@posteo.net). Tu peux aussi [ouvrir un ticket sur GitHub](https://github.com/Bublex/biblib-site/issues).

---

## English summary

Biblib collects no personal data: no account, no server, no analytics. Settings are stored locally (`chrome.storage.local`, not synced). On supported book, music, film and board game sites, the extension reads the ISBN (or EAN for a CD, DVD or board game), title and author of the displayed item and sends them only to the public catalogs of the libraries the user selected, directly from the browser, to check availability. Unless the user turns off Médiathèque Numérique (on by default), film or series titles (and original titles if needed) are also sent to its public API without authentication or cookies. A catalogue match does not confirm that the user's library subscribes or that the user's account has remaining credits. Nothing is sent to the developer, sold, or shared for any other purpose. The optional "Autour de moi" (near me) button asks the browser or phone for the user's location, compares it on the device with the towns served by each supported library network to list the nearest ones, and discards it: the location is never sent or stored.

The iPhone app uses the camera only to read a book's barcode on the device; images are neither stored nor sent. The scanned ISBN or EAN is sent to the selected library catalogs and, to identify the item, to the French National Library catalog (catalogue.bnf.fr). To get the title and cover, the barcode is also sent to leslibraires.fr (a network of independent bookshops), then if needed to Google Books and Open Library (books) or MusicBrainz and Cover Art Archive (CDs), once per item, with nothing else. A link pasted into the search field is fetched from the phone, like a shared page. Settings, favorites, bookmarks, the list of scanned books and library cards (number, holder, expiry date, entered by the user to show the card's barcode at the checkout kiosk) are stored on the phone only and never sent; the card renewal reminder is a local notification scheduled by the phone; bookmarked items are re-checked against the selected catalogs when the app is opened.

Contact: [felix-biblib@posteo.net](mailto:felix-biblib@posteo.net).
