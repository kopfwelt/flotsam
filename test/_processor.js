import fs from 'fs';
import pify from 'pify';
import preprocessor from 'suitcss-preprocessor';

const plugins = ['postcss-mixins', 'postcss-nested', 'postcss-for', 'postcss-calc'];
const options = {
  root: './css',
  minify: true,
  use: plugins,
  autoprefixer: {
    // disable
    browsers: '',
    cascade: true
  },
  cssnano: {
    calc: false,
    autoprefixer: false,
    mergeRules: false,
    safe: true,
    discardComments: true,
    core: false
  }
};

const run = async (t, input, output) => {
  const css = await pify(fs.readFile)(input, 'utf8');
  const fixture = await pify(fs.readFile)(output, 'utf8');
  const result = await preprocessor(css, options);

  t.deepEqual(result.css, fixture);
  t.deepEqual(result.warnings().length, 0);
};

module.exports = {run};
