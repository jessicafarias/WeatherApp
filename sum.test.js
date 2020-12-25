import * as helper from './src/style_helpers';

test('add a+b', ()=>{
  expect(helper.sum(1,2)).toBe(3);
});