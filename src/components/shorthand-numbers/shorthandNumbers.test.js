const shorthandNumber = number => {
    const thousand = 1000;
    const million = 1000000;
    const billion = 1000000000;
    const toBigM = 1000000000000;

    if (number > 0) {
        if (number >= thousand) {
            if (number >= million) {
                if (number >= billion) {
                    if (number >= toBigM) {
                        return 'infi';
                    }
    
                    number /= billion;
                    return number.toFixed(1) + 'B';
                }
    
                number /= million;
                return number.toFixed(1) + 'M';
            }
    
            number /= thousand;
            return number.toFixed(1) + 'K';
        }

        return number.toString();
    }

    return 'Vote';
}

describe('Shortning Function', () => {
    it ('Take a 1200 and turn it into 1.2K', () => {
        const expectedResult = '1.2K';
        const input = 1200;

        const result = shorthandNumber(input);

        expect(result).toBe(expectedResult);
    })

    it ('It returns Vote when input is 0', () => {
        const expectedResult = 'Vote';
        const input = 0;

        const result = shorthandNumber(input);

        expect(result).toBe(expectedResult);
    })
})