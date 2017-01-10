import test from 'ava';
import {run} from '../helpers/processor';

test('animations.css contains a mixing that should ', t => {
  run(t, './test/fixtures/tools/helpers/animations.css', './test/fixtures/tools/helpers/animations.expected.css');
});

test('rtl.css should provide a working mixin', t => {
  run(t, './test/fixtures/tools/helpers/rtl.css', './test/fixtures/tools/helpers/rtl.expected.css');
});
