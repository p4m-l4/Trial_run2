import { assert } from 'chai';
import add from '../calculator/add.js';

describe('Testing addition', () => {
    it('Testing addition of whole numbers - should return 8', () => {
      assert.equal(add(4, 4), 8);
    });
    it('Testing addition of decimals - should return 1', () => {
      assert.equal(add(0.3, 0.7), 1);
    });
    it('Testing addition with 0 - should return 8', () => {
      assert.equal(add(0, 8), 8);
    });
    it('Testing addition with a negative - should return 8', () => {
      assert.equal(add(-3, 11), 8);
    });
  });