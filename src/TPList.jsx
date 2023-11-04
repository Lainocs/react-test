import { useState } from 'react'
import SearchBar from './TPList/components/SearchBar'
import ProductTable from './TPList/components/ProductTable'

function TPList() {
	const products = [
		{ category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
		{ category: 'Fruits', price: '$1', stocked: true, name: 'Banana' },
		{ category: 'Fruits', price: '$2', stocked: false, name: 'Cherry' },
		{ category: 'Vegetables', price: '$2', stocked: true, name: 'Cucumber' },
		{ category: 'Vegetables', price: '$4', stocked: false, name: 'Potato' },
		{ category: 'Vegetables', price: '$1', stocked: true, name: 'Salad' },
	]

	const [search, setSearch] = useState('')
	const [showOnlyStocked, setShowOnlyStocked] = useState(false)

	const filteredProducts = products.filter((product) => {
		if (showOnlyStocked && !product.stocked) {
			return false
		}
		if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
			return false
		}
		return true
	})

	return (
		<>
			<div>
				<h1>TPList</h1>
				<SearchBar
					search={search}
					onSearchChange={setSearch}
					showOnlyStocked={showOnlyStocked}
					onOnlyStockedChange={setShowOnlyStocked}
				/>
				<ProductTable products={filteredProducts} />
			</div>
		</>
	)
}

export default TPList
