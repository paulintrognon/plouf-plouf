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

# CI/CD

Deux workflows GitHub Actions :

- **CI** (`.github/workflows/ci.yaml`) — lint, type-check et tests Cypress. Tourne sur chaque pull request.
- **Publish** (`.github/workflows/publish.yaml`) — construit et pousse l'image Docker sur `ghcr.io`. Déclenché par un push de tag `v*`.

Publish rejoue la CI en premier (`workflow_call`) : l'image n'est publiée que si la CI passe.

Pour publier une nouvelle version :

```shell
# bump version dans package.json, merge la PR, puis :
git tag v5.7.0
git push origin v5.7.0
```
