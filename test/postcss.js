import fs from 'fs';
import pify from 'pify';
import postcss from 'postcss';
import test from 'ava';


const processor = postcss(); // plugins []

test(async t => {
    const postcss = await pify(fs.readFile)('./scss/_kern.scss', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/kern.css', 'utf8');
    const css = await processor.process(postcss);
    t.is(postcss, fixture);
});

