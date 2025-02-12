import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import AddProductForm from "./AddProductForm";

export default function ProductList({	products = [],	setProducts = () => {},		addToCart = () => {},	isPOS = false}) {
	const [searchItem, setSearchItem] = useState("");
	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchItem.toLowerCase())
	);
	useEffect(() => {
		filteredProducts.filter((produc) => {
			setProducts = produc.name
				.toLowerCase()
				.includes(searchItem.toLowerCase());
				console.log("cambio")
		});
	}, [searchItem]);
	return (
		<>
			<div>
				<input
					type="text"
					placeholder="Buscar productos..."
					value={searchItem}
					onChange={(e) => setSearchItem(e.target.value)}
					className="searchInput"
				/>
			</div>
			<div className="product-list">
				{!isPOS && (
					<AddProductForm setProducts={setProducts} products={products} />
				)}
				<div className="product-grid">
					{filteredProducts.map((product) => (
						<ProductItem
							key={product._id}
							product={product}
							setProducts={setProducts}
							addToCart={addToCart}
							isPOS={isPOS}
						/>
					))}
				</div>
			</div>
		</>
	);
}
