import Input from './forms/Input'
import Checkbox from './forms/Checkbox'

function SearchBar({ search, onSearchChange, showOnlyStocked, onOnlyStockedChange }) {
	return (
		<div className='search-bar'>
			<div>
				<Input
					placeholder='Search...'
					value={search}
					onChange={onSearchChange}
				/>
				<Checkbox
					checked={showOnlyStocked}
					onChange={onOnlyStockedChange}
					label='Only show products in stock'
				/>
			</div>
		</div>
	)
}

export default SearchBar
