import fs from 'fs';
import pify from 'pify';
import preprocessor from 'suitcss-preprocessor';
import {plugins} from '../helpers/config';
import test from 'ava';

test('animations.css should provide a working mixin', async t => {
    let css = await pify(fs.readFile)('./css/tools/helpers/animations.css', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/tools/helpers/animations.css', 'utf8');

    // use mixin
    css = `${css}
@mixin iterative-delay .default;
@mixin iterative-delay .parameter, 4, 0.2s;
`;

    const result = await preprocessor(css, {
      root: './css',
      minify: true,
      use: plugins
    });

    t.deepEqual(result.css, fixture);
});


test.only('rtl.css should provide a working mixin', async t => {
    let css = await pify(fs.readFile)('./css/tools/helpers/rtl.css', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/tools/helpers/rtl.css', 'utf8');

    // use mixin
    css = `${css}
.TestClass {
  margin: 0 0 0 20px;
  @mixin rtl {
    margin: 0 20px 0 0;
  }
}
`;

    const result = await preprocessor(css, {
      root: './css',
      minify: false,
      use: plugins
    });

    t.deepEqual(result.css, fixture);
});
