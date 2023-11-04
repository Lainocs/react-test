function Checkbox({ checked, onChange, label }) {
	return (
		<div>
			<label>
				<input
					type='checkbox'
					checked={checked}
					onChange={(e) => onChange(e.target.checked)}
				/>
				{label}
			</label>
		</div>
	)
}

export default Checkbox
