const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage', () => {
    let mortgage = null;
     
    beforeEach(() => {
      mortgage = new Mortgage();
    });

    it('it should have a constructor', () => {
        expect(mortgage.constructor).to.exist;
    });
    
    it('it should have a function named monthlyPayment', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have a function which returns a number', () => {
        expect(mortgage.monthlyPayment()).to.be.a('number');
    });

    it('monthlyPayment function should calculate correctly', () => {
        mortgageTest = new Mortgage (100000, 3.75, 15, 12);
        expect(mortgageTest.monthlyPayment()).to.equal(727.22);
    });
    

});