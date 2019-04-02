import {greet} from './greet';

describe('test greet()', () => {
    it('should contain the name which is passed as argument', () => {
        const result = greet('Soumya');
        expect(result).toContain('Soumya');
    });
});
