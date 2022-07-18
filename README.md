# 11ty QuantCDN starter template

![Template screenshot](quant/screenshot.png?raw=true)

This template provides everything you need to get started with [11ty](https://www.11ty.dev/) on QuantCDN.

Click the "Deploy to Quant" button to create a new repo, QuantCDN project, and deployment pipelines.

[![Deploy to Quant](https://www.quantcdn.io/img/quant-deploy-btn-sml.svg)](https://dashboard.quantcdn.io/deploy/step-one?template=11ty)


### Installation

```
$ yarn
```

### Build

```
$ yarn build
```

This command generates static content into the `public` directory and can be served using any static contents hosting service.


### Local Serve

```
$ yarn serve
```

This command starts a local webserver to preview content change locally.


### Deployment

#### Locally

If Quant CLI is configured (e.g via `quant init`) then you can simply run the following to deploy the latest build to Quant.

```
yarn deploy
```

#### via CI

This template automatically preconfigures your CI pipeline to deploy to Quant. This means you simply need to edit content and commit changes to trigger the build & deploy process.
