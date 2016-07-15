/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />
import Calculator from '../index';
import {expect} from 'chai';

describe('Maths', () => {
  var calc: Calculator;

  beforeEach(function () {
    calc = new Calculator();
  });

  it('should add correctly', (done: Function) => {
    expect(calc.add(1,2)).to.equal(3);
    done();
  });

  it('should multiply correctly', (done: Function) => {
    expect(calc.multiply(1,2)).to.equal(2);
    done();
  });
});
