import React from "react";
import ProductsByCategoryList from "../ui/ProductsByCategoryList";
export default function FurniturePage() {
	return (
		<>
			<div className="flex flex-col justify-center h-[10rem]">
				<h2 className="w-2/3">Todo FurniturePage hero</h2>
			</div>
			<div className="flex flex-col">
				<ProductsByCategoryList category="furniture" />
			</div>
		</>
	);
}
