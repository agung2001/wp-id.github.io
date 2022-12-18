import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/wp-id.github.io" : "",
		}
	}
};

export default config;
