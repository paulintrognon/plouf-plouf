# Plouf, plouf !

Site de tirage au sort en ligne avec partage du résultat.

## Développement local


### Avec Node.js

  ```shell
 yarn
 yarn dev
  ```

### Avec Docker

```shell
 docker-compose up dev
  ```

## Builder une image pour la prod

### Avec Node.js

```
yarn build && yarn start
```

### Avec Docker

```
docker-compose up prod
```

## Utiliser l'image officielle hub.docker.com/repository/docker/paulintrognon/plouf-plouf

```
docker run -d --restart=always -p 80:3000 paulintrognon/plouf-plouf:latest
```
