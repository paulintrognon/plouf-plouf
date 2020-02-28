# Plouf, plouf !

Site de tirage au sort en ligne avec partage du résultat.

## Développement local

  ```shell
 yarn
 yarn dev
  ```

## Déploiement en prod

### Avec Node.js

```
yarn build && yarn start
```

### Avec Docker

```
docker run -d --restart=always -p 80:3000 paulintrognon/plouf-plouf
```
