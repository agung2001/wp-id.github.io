import adapter from "@sveltejs/adapter-static";
import * as fs from 'fs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: (!fs.existsSync('./.development')) ? "docs" : "public",
			assets: (!fs.existsSync('./.development')) ? "docs" : "public"
		}),
		paths: {
			base: (!fs.existsSync('./.development')) ? "/wp-id.github.io" : "",
		}
	}
};

export default config;
