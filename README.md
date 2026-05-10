# Plouf, plouf !

Site de tirage au sort en ligne avec partage du résultat.

# Développement local

```shell
pnpm install
pnpm dev
```


# Code Quality

## Eslint

Avant chaque commit est lancé un audit de code avec `husky`. Si l'audit ne passe pas, le commit ne pourra se faire.

Pour lancer un audit manuellement :

```shell
pnpm lint .
```

Vous pouvez tenter de réparer automatiquement les erreurs avec :

```shell
pnpm lint . --fix
```

## Tests E2E

Lancer les tests E2E avec la commande suivante :

```
pnpm test
```

# Prod

```
pnpm start
```
