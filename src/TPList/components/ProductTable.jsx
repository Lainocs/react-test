import ProductCategoryRow from "./products/ProductCategoryRow"
import ProductRow from "./products/ProductRow"

function ProductTable({ products }) {
	const rows = []
	let lastCategory = null

	for (let product of products) {
		if (product.category !== lastCategory) {
			rows.push(<ProductCategoryRow name={product.category} key={product.category} />)
		}
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
	}
	return (
		<div className='product-table'>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>

				<tbody>
          {rows}
        </tbody>
			</table>
		</div>
	)
}

export default ProductTable
