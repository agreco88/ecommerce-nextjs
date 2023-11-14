import React from "react";
import ProductsByCategoryList from "../ui/ProductsByCategoryList";
import ProductsFilter from "../ui/ProductsFilter";
export default function AllProductsPage() {
	return (
		<>
			<div className="flex flex-col justify-center h-[10rem]">
				<h2 className="w-2/3">Todo All products hero</h2>
			</div>
			<div className="flex flex-col">
				<ProductsFilter />
				<ProductsByCategoryList category="all" />
			</div>
		</>
	);
}
