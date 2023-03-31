## Sans ssr

### lancer l'api

dans le dossier api

```
npm start
```

### lancer le serveur webpack de @angular/cli

dans le dossier client

```
npm start
```

Pour rediriger les requêtes quand on utilise le serveur de developpement

- création du fichier proxy.conf.js
- Ajout de --proxy-config proxy.conf.js dans le package.json pour la commande start (pour que @angular/cli utilise le proxy);

## avec ssr

### lancer l'api

dans le dossier api

```
npm start
```

### lancer le serveur ssr

dans le dossier client

```
npm run dev:ssr
```

http://localhost:4200 => serveur ssr (point d'entrée, c'est que utilise dans le navigateur)

http://localhost:3000 => serveur api

Pour rediriger les requêtes quand on utilise le serveur de developpement en mode ssr

- ajout d'un intercepteur : quand l'application est rendu côté serveur il faut que les urls soient absolues et non relatives. L'intercepteur recupère toutes les requêtes Angular sortantes qui commencent par /api et si on est côté serveur il remplace l'url relative en url absolue pour atteindre le serveur d'api.

- côté api il faut que les cors soient acceptés.

- On ajoute également TransferHttpCacheModule dans app.module.

- On provide l'intercepteur dans app.module également.
