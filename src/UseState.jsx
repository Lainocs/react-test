function UseState() {

  let count = 0

  const increment = () => {
    count++
    console.log(count)
  }

  return <>
    <h1>UseState</h1>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <hr />
  </>
}

export default UseState
