import {getCurrencies} from './getCurrencies';

describe('test greet()', () => {
    it('should contain the name which is passed as argument', () => {
        const result = getCurrencies();
        expect(result.length).toEqual(3);
    });

    it('should contain the name which is passed as argument', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});
