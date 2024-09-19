import calculate from '/index.js';
import { describe, it } from 'mocha';
import assert from 'assert';

describe('calculate', () => {
    it('should add 2 and 3 to equal 5 (fehlerhaft)', () => {
        assert.equal(calculate(2, 3, '+'), 5);  
      });
    
      it('should subtract 5 and 3 to equal 2 (fehlerhaft)', () => {
        assert.equal(calculate(5, 3, '-'), 2);  
      });

      it('should throw an error for unknown operation', () => {
        assert.throws(() => calculate(2, 3, 'squareroot'), {
          message: 'Unbekannte Operation',
        });
      });
  });
