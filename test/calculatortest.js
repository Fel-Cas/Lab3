'use strict';

const expect =require('chai').expect;
const calculator=require('../app/calculator');

describe('Claculator - Test ', function(){
 describe('Testing the Operations',function(){
    it('Testing the sum operation', function(){
        expect(calculator.add(1,1)).to.equals(1+1);
    });
    it('Testing the minus operation', function(){
        expect(calculator.minus(1,1)).to.equals(1-1);
    });
    it('Testing the multiply operation', function(){
        expect(calculator.multiply(5,6)).to.equals(5*6);
    });
    it('Testing the divide operation', function(){
        expect(calculator.divide(1,1)).to.equals(1/1);
    });
    it('Testing the divide by zero operation', function(){
        const expectedError=new Error('No se puede dividir por 0');
        expect(calculator.divide(5,0).message).to.equal(expectedError.message);
    });
 });
});