---
title: "Scanner un livre avec ton téléphone Android"
description: "Sur Android, un raccourci scanne le code-barres d’un livre et ouvre sa recherche dans le catalogue de ta bibliothèque."
---

# Scanner un livre avec ton téléphone Android

**Sur iPhone, installe l'[app Biblib](https://apps.apple.com/fr/app/biblib-dispo-en-biblioth%C3%A8que/id6828761341).** Elle scanne le code-barres et cherche l'œuvre dans toutes tes bibliothèques. Cette page sert aux téléphones Android.

Chez un pote ou en librairie, l'extension Chrome ne t'aide pas. Sur Android, un raccourci la remplace : il scanne le code-barres au dos du livre (c'est son ISBN) et ouvre la recherche de ce livre dans le catalogue de ta bibliothèque. Tu y vois la notice et les exemplaires disponibles, et tu peux réserver avec ton compte lecteur.

Il faut une application gratuite, Binary Eye. Aucun serveur Biblib n'intervient : le téléphone ouvre directement la page du catalogue.

## 1. Récupérer l'adresse de ton catalogue

Dans l'extension, ouvre la fenêtre Biblib et clique sur **Sur téléphone**. C'est aussi la dernière section des réglages, **Sur ton téléphone**. Pour chaque bibliothèque cochée, Biblib affiche son adresse de recherche avec `{RESULT}` à la place de l'ISBN, et un bouton **Copier**.

Pour l'envoyer sur le téléphone : une note, un e-mail ou un message à toi-même.

Quelques exemples :

| Réseau | Adresse |
|---|---|
| Mérignac | `https://www.mediatheque.merignac.com/Default/search.aspx?SC=DEFAULT&QUERY={RESULT}` |
| Paris | `https://bibliotheques.paris.fr/Default/search.aspx?SC=CATALOGUE&QUERY={RESULT}` |
| Rennes (Champs Libres) | `https://opac.si.leschampslibres.fr/iii/encore/search/C__S{RESULT}__Orightresult__U?lang=frf` |
| Toulouse | `http://catalogues.toulouse.fr/web2/tramp2.exe/do_keyword_search/log_in?setting_key=BMT1&servers=1home&index=default&query={RESULT}` |

Les autres réseaux Syracuse suivent le même modèle que Mérignac ou Paris. Les catalogues inMedia (Bordeaux, Bordeaux Métropole, Lyon, Marseille, Nantes, Avignon) et Iguana (Plaine Commune, Clermont, Le Mans, Nancy…) n'ont pas d'adresse de recherche directe : le raccourci n'est pas possible pour eux.

## 2. Configurer Binary Eye

[Binary Eye](https://github.com/markusfisch/BinaryEye) est un lecteur de codes-barres gratuit et open source, sur [Google Play](https://play.google.com/store/apps/details?id=de.markusfisch.android.binaryeye) et [F-Droid](https://f-droid.org/packages/de.markusfisch.android.binaryeye/).

1. Installe Binary Eye.
2. Dans ses réglages, section **Contenu**, ouvre **Actions automatiques** puis **Ajouter une action**.
3. Expression régulière : `97[89][0-9]{10}`. Elle ne reconnaît que les codes-barres de livres (ISBN-13) : les autres codes scannés restent traités normalement.
4. Type d'action : **Ouvrir l'URL**. Modèle d'URL : l'adresse copiée, telle quelle, avec `{RESULT}`.
5. Scanne un livre : le catalogue s'ouvre dans le navigateur.

Une action automatique n'ouvre qu'une adresse : choisis la bibliothèque où tu empruntes le plus.

Sans **Actions automatiques** (versions anciennes de Binary Eye), utilise le réglage **Ouvrir les données inconnues avec l'URL** : colle l'adresse sans `{RESULT}`, ce qui ne marche que si l'adresse se termine par `{RESULT}` (Syracuse, Toulouse). Après un scan, touche **Rechercher sur internet** et choisis cette adresse.

## Ce que le raccourci ne fait pas

- **Pas de résumé Biblib** : tu vois la page du catalogue, une bibliothèque à la fois.
- **Recherche par ISBN seulement** : si la bibliothèque a une autre édition (poche, réédition), la recherche peut ne rien trouver. Cherche alors par titre sur le catalogue, ou avec l'extension.
- **Pas de favoris** ni de tri par annexe.
