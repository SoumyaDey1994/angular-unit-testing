import {compute} from './compute';

describe('test compute()', () => {

    beforeEach(() => {

    });

    it('should return 0 when a negetive value is passed as argument', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it('should return nu+1 when a positive value is passed as argument', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});