import fs from 'fs';
import pify from 'pify';
import postcss from 'postcss';
import {plugins} from './helpers/config';
import test from 'ava';

// postcss plugins
import preprocessor from 'suitcss-preprocessor';

test('Testing Kern framework', async t => {
    const css = await pify(fs.readFile)('./css/kern.css', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/kern.css', 'utf8');
    
    const result = await preprocessor(css, {
      root: './css',
      minify: true,
      use: plugins
    });

    t.is(result.css, fixture);
});
