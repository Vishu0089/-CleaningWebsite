# Clean Canada

A responsive, single-page cleaning services website with a quote request form connected to Zapier.

## Run locally

Requires Node.js 22 or newer and npm.

```sh
git clone https://github.com/Vishu0089/-CleaningWebsite.git CleaningWebsite
cd CleaningWebsite
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build and check

```sh
npm run lint
npm run build
```

## GitHub Pages deployment

Every push to `main` runs the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`. The workflow prerenders the site and publishes it to:

<https://vishu0089.github.io/-CleaningWebsite/>

The Pages build uses the repository subpath as its base URL. Local development and regular production builds continue to use the root URL.

If Pages has not been enabled for this repository yet, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. The quote request form sends submissions directly to the configured Zapier webhook.
