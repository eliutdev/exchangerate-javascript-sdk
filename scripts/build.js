const esbuild = require('esbuild');
const package = require('../package.json');

const commonOptions = {
  entryPoints: ['src/index.ts'],
  minify: true,
  bundle: true,
  external: ['axios'],
  banner: {
    js: `// ${package.author}`,
    css: `/*${package.author}*/`,
  },
};

// ECMAScript Module
esbuild.buildSync({
  ...commonOptions,
  format: 'esm',
  outfile: 'dist/index.esm.js',
});

// CommonJS
esbuild.buildSync({
  ...commonOptions,
  format: 'cjs',
  outfile: 'dist/index.cjs.js',
});
