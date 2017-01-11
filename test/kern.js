import test from 'ava';
import {run} from './helpers/processor';

test('run test', async t => {
	await run(t, './css/kern.css', './test/fixtures/kern.css');
});
