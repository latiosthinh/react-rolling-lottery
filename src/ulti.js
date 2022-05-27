const shuffle = array => {
	let shuffled = array
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)

	return shuffled
}

const slice = (number, len) => {
	let arr = Array.from(String( number ), Number)

	if ( arr.length < len ) {
		for ( let i = 0; i < len - arr.length + 1; i++ ) {
			arr.splice( 0, 0, 0 )
		}
	}

	return arr
}

const random = ( max, oldNumbers ) => {
	let randomNumber = Math.floor(Math.random() * (max + 1))

	if ( oldNumbers && 
		Array.isArray( oldNumbers ) && 
		oldNumbers.includes( randomNumber ) 
	) {
		randomNumber = Math.floor(Math.random() * (max + 1))
	}

	return randomNumber
}

export { shuffle, slice, random }