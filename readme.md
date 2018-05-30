Introduction aux routes dans Express
====================================

Plusieurs versions progressives.

Charger une version avec

```git checkout <tag>```
où `tag` peut prendre comme valeur :
* `v0` : version initiale
* `v0.1` : version avec `public/images/timoleon.jpg` pour tester le middleware *static*

  essayer `http://127.0.0.1:3000/images/timoleon.jpg`
* `v1` : version avec un middleware trivial pour /first

  consulter  `http://127.0.0.1:3000/first`
* `v1.1` : exemple d'utilisation de next()

  consulter  `http://127.0.0.1:3000/first`
* `v2.0.1` : retour à la situation initiale pour l'étude des routes
* `v2.1` : bonne pratique : définir les routes à part de l'application, application avec l'ajout d'une route `/books`
* `v2.2` : ajout d'un middleware utilisé par toutes les routes de `/books `
* `v2.3` : différentes formes de chemins de routes, utilisation de routes "paramétrées"
* `v2.4` : séparation des préoccupations, définition d'un contrôleur à part pour la route /books
* `v2.4.5` : application du principe de séparations à tous les routeurs existants et ajout d'un routeur pour la gestion des erreurs    
* `v2.5` : version pour mise en évidence de différents aspects de pug
* `v2.6` : cas d'une réponse au format json (voir `/books/details/*someId*`)
* `v2.7` : utilisation de fetch pour une requête asynchrone du client vers le serveur (voir `/books`)
* `v2.7.5` : utilisation de Response.ok pour gérer le statut de la réponse
* `v2.8` : exemples de requêtes fetch() avec des options, exemple de requêtes PUT (voir au niveau du router)
* `v2.9` : utilisation de CORS pour les requêtes 'cross-origins'

faire ```git checkout master``` pour revenir sur la banche principale
