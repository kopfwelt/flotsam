import fs from 'fs';
import pify from 'pify';
import postcss from 'postcss';
// import {plugins} from '../helpers/config';
import test from 'ava';

// postcss plugins
import preprocessor from 'suitcss-preprocessor';

test('animations.css should provide a working mixin', async t => {
    let css = await pify(fs.readFile)('./css/tools/helpers/animations.css', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/tools/helpers/animations.css', 'utf8');

    // use mixin
    css = `${css}
.test {

  @mixin iterative-delay;
}
`;
    
    const result = await preprocessor(css, {
		root: './css/tools/helpers/animations.css',
		minify: true,
		use: ['postcss-mixins', 'postcss-conditionals', 'postcss-each', 'postcss-for', 'postcss-calc', 'cssnext']
    }, './css/kern.css');

    t.is(result.css, fixture);
});
