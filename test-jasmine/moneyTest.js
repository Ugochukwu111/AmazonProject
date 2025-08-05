import {formartCurrency} from '../scripts/utilis/money.js';

describe('test suite: formart currency', ()=>{
  it('converts cents into dollars', () => {
    expect(formartCurrency(2095)).toBe('20.95');
  });

    it('Works with 0', () => {
    expect(formartCurrency(0)).toEqual('0.00');
  });

    it('rounds up to the nearest cent', () => {
    expect(formartCurrency(2000.5)).toEqual('20.01');
  });
});