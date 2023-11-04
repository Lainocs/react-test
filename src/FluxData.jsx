import { useState } from 'react'

function FluxData() {
	const [isTermsAccepted, setIsTermsAccepted] = useState(false)

	console.log('FluxData : ' + isTermsAccepted)

	return (
		<div>
			<h1>FluxData</h1>
			<CGUCheckbox
				checked={isTermsAccepted}
				onCheck={setIsTermsAccepted}
			/>
			<button disabled={!setIsTermsAccepted}>Envoyer le formulaire</button>
		</div>
	)
}

function CGUCheckbox({ checked, onCheck }) {
	return (
		<>
			<div>
				<label>
					<input
						type='checkbox'
						onChange={(e) => onCheck(e.target.checked)}
						checked={checked}
					/>
					Accepter les CGU
				</label>
			</div>
		</>
	)
}

export default FluxData
