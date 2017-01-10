import test from 'ava';
import {run} from './helpers/processor';

test('run test', t => {
	run(t, './css/kern.css', './test/fixtures/kern.css');
});
