import fs from 'fs';
import pify from 'pify';
import postcss from 'postcss';
import test from 'ava';

test.cb('Postfix should run', t => {
    fs.readFile('./scss/_kern.scss', 'utf-8', (err, css) => {
    	fs.readFile('./test/fixtures/kern.css', 'utf-8', (err, expected) => {
	        postcss() // plugins: [precss, autoprefixer]
	            .process(css) // , { from: 'scss/_kern.scss', to: '.tmp/kern.css' }
	            .then(result => {
	                // fs.writeFile('dest/app.css', result.css);
	                // if ( result.map ) 
	                // 	fs.writeFile('dest/app.css.map', result.map);
	                // console.log(result.css);
	                // t.deepEqual(result.css, 'a{}');
	                t.deepEqual(result.css, expected);
	                t.end();
	            });
	       });
    });
});

// test(async t => {
//     const data = await pify(fs.readFile)('./scss/_kern.scss', 'utf8');
//     const data = await pify(fs.readFile)('./scss/_kern.scss', 'utf8');
//     t.is(data, 'foo');
// });