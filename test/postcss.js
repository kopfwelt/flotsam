import fs from 'fs';
import pify from 'pify';
import postcss from 'postcss';
import test from 'ava';

// postcss plugins
import atImport from 'postcss-import';


const processor = postcss().use(atImport({
	root: './css'
})); // plugins []

test('Testing Kern framework', async t => {
    const postcss = await pify(fs.readFile)('./css/kern.css', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/kern.css', 'utf8');
    const result = await processor.process(postcss, {
    	from: './css/kern.css'
    });
    t.is(result.css, fixture);
});

