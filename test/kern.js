import test from 'ava';
import {run} from './helpers/processor';

test('run test', async t => {
	await run(t, './src/kern.css', './test/fixtures/kern.css');
});
