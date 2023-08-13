const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decoded = '';

    for (let i = 0; i < expr.length; i += 10) {
        const letterCode = expr.substr(i, 10);
        if (letterCode === '**********') {
            decoded += ' ';
        } else {
            const morseCode = letterCode
                .replace(/00/g, '')  // Replace 00 with empty string
                .replace(/10/g, '.') // Replace 10 with dot
                .replace(/11/g, '-'); // Replace 11 with dash
            decoded += MORSE_TABLE[morseCode];
        }
    }

    return decoded;
}

module.exports = {
    decode
}