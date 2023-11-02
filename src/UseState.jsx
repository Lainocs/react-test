import { useState } from 'react'

function UseState() {
	const [count, setCount] = useState(0)
	const [user, setUser] = useState({
		name: 'John',
		age: 22,
	})

	const increment = () => {
		setCount(count + 1)
		setUser({ ...user, age: user.age + 1 })
	}

	// const increment = () => {
	//   setCount(count + 1)
	//   setCount(count + 1)
	//   setCount(count + 1)
	// }

	// const incrementState = () => {
	//   setCount((count) => count+ 1)
	//   setCount((count) => count+ 1)
	//   setCount((count) => count+ 1)
	// }

	return (
		<>
			<h1>UseState</h1>
			<p>Count: {count}</p>
			<p>
				Age de {user.name} : {user.age}
			</p>
			<button onClick={increment}>Increment</button>
			{/* <button onClick={incrementState}>Increment State</button> */}
			<hr />
		</>
	)
}

export default UseState
