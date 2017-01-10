import fs from 'fs';
import pify from 'pify';
import preprocessor from 'suitcss-preprocessor';

const options = {
  root: './css',
  minify: true,
  use: ['postcss-mixins', 'postcss-nested', 'postcss-for', 'postcss-calc'],
  autoprefixer: {
    // disable
    browsers: '',
    cascade: true
  },
  cssnano: {
    autoprefixer: false,
    calc: false,
    colormin: false,
    convertValues: false,
    core: false,
    discardComments: false,
    discardDuplicates: false,
    discardEmpty: false,
    discardOverridden: false,
    discardUnused: false,
    filterOptimiser: false,
    filterPlugins: false,
    functionOptimiser: false,
    mergeIdents: false,
    mergeLonghand: false,
    mergeRules: false,
    minifyFontValues: false,
    minifyGradients: false,
    minifyParams: false,
    minifySelectors: false,
    normalizeCharset: false,
    normalizeString: false,
    normalizeUnicode: false,
    normalizeUrl: false,
    orderedValues: false,
    reduceBackgroundRepeat: false,
    reduceDisplayValues: false,
    reduceIdents: false,
    reduceInitial: false,
    reducePositions: false,
    reduceTimingFunctions: false,
    reduceTransforms: false,
    styleCache: false,
    svgo: false,
    uniqueSelectors: false,
    zindex: false
  }
};

export const run = async (t, input, output) => {
  const css = await pify(fs.readFile)(input, 'utf8');
  const fixture = await pify(fs.readFile)(output, 'utf8');
  const result = await preprocessor(css, options);

  t.deepEqual(result.css, fixture);
  t.deepEqual(result.warnings().length, 0);
};
