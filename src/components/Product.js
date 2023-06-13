import React, { useContext } from 'react';
import ProductContext from '../contexts/productContext';

const Product = () => {
	const { addItem } = useContext(ProductContext);

	return (
		<div className="product">
			<img src={ProductContext.product.image} alt={`${ProductContext.product.title} book`} />

			<h1 className="title">{ProductContext.product.title}</h1>

			<p className="price">${ProductContext.product.price}</p>

			<button onClick={() => addItem(ProductContext.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
