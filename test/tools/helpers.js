import test from 'ava';
import {run} from '../helpers/processor';

test('test.css', async t => {
  await run(t, 'test/fixtures/tools/helpers/test.css', 'test/fixtures/tools/helpers/test.expected.css');
});

test('animations.css', async t => {
  await run(t, 'test/fixtures/tools/helpers/animations.css', 'test/fixtures/tools/helpers/animations.expected.css');
});

test('rtl.css should provide a working mixin', async t => {
  await run(t, 'test/fixtures/tools/helpers/rtl.css', 'test/fixtures/tools/helpers/rtl.expected.css');
});
