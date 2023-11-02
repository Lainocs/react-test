const tech = 'React'
const style = { color: 'red', backgroundColor: 'yellow' }
const showText = false
const todos = [
  'Go to the store',
  'Finish the screencast',
  'Prepare dinner',
  'React'
]

const handleClick = () => {
  alert('Hello !')
}

function SyntaxeJSX() {

  return <>
    <h1>Syntaxe JSX</h1>
    <Title name="Alexis" className="titleClass" id="titleId" />
    <Title name="Nicolas">Je suis un enfant</Title> 
    <Title name="Pierrick" hidden /> 

    {showText ? 
      <p>This is a demo of { tech }.</p> : 
      <p>showTitle is false</p>
    }
    
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  </>
}

function Title ({name, hidden, ...props}) {
  if (hidden) {
    return null
  }
  console.log(props)
  return <h2 onClick={handleClick} style={style} {...props}>Hello {name} {props.children}!</h2>
}

export default SyntaxeJSX
