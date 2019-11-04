import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.svelte',
	output: [
		{
			file: pkg.module,
			format: 'es',
			globals: {
				'@sanity/block-content-to-hyperscript': 'blockContentToHyperscript'
			}
		},
		{
			file: pkg.main,
			format: 'umd',
			name,
			globals: {
				'@sanity/block-content-to-hyperscript': 'blockContentToHyperscript'
			}
		}
	],
	plugins: [
		svelte(),
		resolve({
			modulesOnly: true
		})
	]
};
