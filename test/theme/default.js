import fs from 'fs';
import pify from 'pify';
import preprocessor from 'suitcss-preprocessor';
import {plugins} from '../helpers/config';
import test from 'ava';

test('elements.css should provide a working css', async t => {
    let css = await pify(fs.readFile)('./css/theme/default/elements.css', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/theme/default/elements.css', 'utf8');


    const result = await preprocessor(css, {
      root: '/css',
      minify: true,
      use: plugins
    });

    t.deepEqual(result.css, fixture);
});
