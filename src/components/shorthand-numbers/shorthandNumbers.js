
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

export default shorthandNumber;
