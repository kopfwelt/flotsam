import fs from 'fs';
import pify from 'pify';
import postcss from 'postcss';
import test from 'ava';

// postcss plugins
import preprocessor from 'suitcss-preprocessor';
import cssnext from 'cssnext';
import mixins from 'postcss-mixins';

test('Testing Kern framework', async t => {
    const css = await pify(fs.readFile)('./css/kern.css', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/kern.css', 'utf8');
    
    const result = await preprocessor(css, {
		root: './css/kern.css',
		minify: true,
		use: ['postcss-mixins', 'cssnext']
    }, './css/kern.css');

    t.is(result.css, fixture);
});
