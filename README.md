# an opinionated template for Cloudflare Worker

- [Hono](https://hono.dev/) as web framework
- [Biome](https://biomejs.dev/) for lint/prettier
- [lefthook](https://github.com/evilmartians/lefthook) as git hooks manager
- [pnpm](https://pnpm.io/) as package manager

## Usage

- Use this repo as a template and create your own one.
- Go to **Repo** - **Settings** - **Secrets and variables** - **Actions**, create two secrets, `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, then it will deploy you code to your Cloudflare Worker on every push via GitHub Action.
- For local dev, run `pnpm run dev`, if you want to deploy manually, run `pnpm run deploy`, you might neeed to login first via `npx wrangler login`.
- If you need to add more environment variables and secrets, put them in `.dev.vars` file, and don't forget to include them in your repo's setting or upload them via `npx wrangler secret`, then update your type `Env` in the `src/index.ts` file accordingly.
- It will use biome to run code check before every commit, it is much faster and with better DX than eslint and prettier, if you want to configure this behavior by yourself, check out `lefthook.yaml` and `biome.json`.

## Package manager

For package manager, `pnpm` is recommended, You can simplify the management of different versions of package managers by enabling corepack. `corepack` is bundled with Node.js since v14.19. So you already have corepack if you have Node.js.

You can enable corepack by running: `corepack enable`, and it will makes sure you're using the correct package manager specified in the package.json like below:

```json
{
  // npm
  "packageManager": "npm@10.8.1",
  // pnpm
  "packageManager": "pnpm@9.1.4",
  // yarn
  "packageManager": "yarn@3.1.1"
}
```

Feel free to change it to whatever you like.
