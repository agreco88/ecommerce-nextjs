import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
	return (
		<figure className="border p-4 bg-gray-200 border-gray-300 rounded-lg h-[25rem] justify-between flex flex-col">
			<div className="bg-gray-50 rounded border border-gray-300 shadow-inner text-gray-400 flex-grow flex justify-center items-center">
				{product.image}
			</div>
			<figcaption className="flex flex-col gap-4 py-2">
				<h3>{product.name}</h3>
				<p className="font-light min-h-[3rem]">{product.description}</p>
				<p className="font-semibold">${product.price}</p>
				<div className="flex gap-2 pt-2 self-start text-white">
					<Link
						href={`/products/detail/${product.slug}`}
						query={product}
						className="bg-blue-500 rounded p-2 px-4 uppercase text-xs"
					>
						More Info
					</Link>
					<button className="bg-green-500 rounded p-2 px-4 uppercase text-xs">
						Add to Cart
					</button>
				</div>
			</figcaption>
		</figure>
	);
};

export default ProductItem;
