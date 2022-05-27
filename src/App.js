import { useState } from 'react';
import { slice, random } from './ulti'
import { v4 as uuidv4 } from 'uuid'
import './App.scss'

function App() {
	const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	const [rolling, setRolling] = useState(false)
	const [maxNumber] = useState(1234)
	const [startPosition] = useState([ 10, 10, 10, 10 ])
	const [winner, setWinner] = useState(false)

	const [oldNumbers, setOldNumbers] = useState([])

	const [chosenNumber, setChosenNumber] = useState('')

	const handleRandom = () => {
		const _r = slice(Math.floor(random(maxNumber, oldNumbers)), maxNumber.toString().length)
		setChosenNumber(_r)
	}

	const startRolling = () => {
		setRolling(true)
		setWinner(false)
		handleRandom()
		setOldNumbers([...oldNumbers, chosenNumber.join('')])
	}

	const stopRolling = () => {
		setRolling(false)
		setWinner(true)
	}

	return (
		<div className="App">
			<div className="lottery">
				{
					startPosition.map( (position, index) =>
						<ul key={uuidv4()} className={"lottery__digits " + (rolling && "rolling")}
							style={{
											marginTop: "-" + (winner ? chosenNumber[index] : position ) + "em",
											animationDuration: Math.random()/2 + "s"
										}}
						>
							{digits.map(digit => <li key={uuidv4()}>{digit}</li>)}
						</ul>
					)
				}
			</div>

			<button onClick={startRolling}>Start</button>
			<button onClick={stopRolling}>Stop</button>
		</div>
	);
}

export default App;
