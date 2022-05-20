/* import adapter from '@sveltejs/adapter-auto'; */
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		
		prerender: {
			default: true
		  }
	},
  
	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				posts: 'src/routes/posts/_post.svelte'
			}
		})
	]
};

export default config;
