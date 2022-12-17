import { mdsvex } from 'mdsvex'
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		paths: {
			base: dev ? "" : "/wp-id.github.io",
		}
	},
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig)],
};

export default config;