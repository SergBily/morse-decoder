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

	for (let i = 0, k = 10; i < expr.length; i += 10, k += 10) {
		arr.push(expr.slice(i, k))
	}
	let arr2 = [];
	arr.forEach(el => {
		let step = 2;
		for (let i = 0, k = step; i < el.length; i += step, k += step) {
			arr2.push(el.slice(i, k))
		}
	})
	
	let arr3 = [];
	for (let i = 0, k = 5; i < arr2.length; i += 5, k += 5) {
		arr3.push(arr2.slice(i, k))
	}
	

	let morse = arr3.map(el => {
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