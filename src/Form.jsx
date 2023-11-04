import { useState } from "react"

function Form() {

  const [lastname, setLastname] = useState('')
  const [check, setCheck] = useState(true)

  const handleChange = (e) => {
    setLastname(e.target.value)
  }

  const toggleCheck = () => {
    setCheck(!check)
  }

  console.table({ lastname, check })

	return (
		<>
			<h1>Form</h1>
			<form>
        <label htmlFor="lastname">Name : </label>
        <input type="text" name="lastname" value={lastname} onChange={handleChange} />
        <input type="checkbox" name="check" checked={check} onChange={toggleCheck} />
        <button disabled={!check}>Envoyer</button>
      </form>
		</>
	)
}

export default Form
