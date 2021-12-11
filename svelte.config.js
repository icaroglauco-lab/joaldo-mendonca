import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const config = {

  kit: {
    adapter: adapter(), // currently the adapter does not take any options
    prerender: {
      crawl: true,
      enabled: true,
      onError: "continue",
      entries: ["*"],
    },
  },

  preprocess: [
    preprocess({}),
  ],
};

export default config;
