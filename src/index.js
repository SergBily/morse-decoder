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
	let arr = [];

	for (let i = 0, k = 2; i < expr.length; i += 2, k += 2) {
		arr.push(expr.slice(i, k))
	}

	let arr2 = [];
	
	for (let i = 0, k = 5; i < arr.length; i += 5, k += 5) {
		arr2.push(arr.slice(i, k))
	}
	

	let morse = arr2.map(el => {
		if (el.includes('**')) {
			return [' '];
		} else {
			let res = []
			let remove = [];
			el.map(el => {
				if (el == '11') {
					res.push('-') ;
				} else if (el == '10') {
					res.push('.') 
				} else if (el == '00') {
					remove.push('');
				}
			})
			return res
		}
	})
	
	let letter = morse.map(el => {
		return el.join('')
	})

	let resLetter = letter.map(el => {
		
		if (el == ' ') {
			return ' ';
		} else {
			return MORSE_TABLE[el];
		}
	})

	return resLetter.join('')
}

module.exports = {
    decode
}