import React from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "@/recoil/atoms/category";

const ProductsFilter = () => {
	const [category, setCategory] = useRecoilState(categoryState);

	const updateCategory = (value) => {
		setCategory(value);
	};

	const categories = ["all", "monitors", "furniture", "lightning", "gadgets"];

	return (
		<div className="flex w-full justify-between items-center">
			{categories.map((cat) => (
				<Filter
					key={cat}
					category={cat}
					onClick={updateCategory}
					isActive={category === cat}
				/>
			))}
		</div>
	);
};

const Filter = ({ category, onClick, isActive }) => (
	<a
		href="#"
		onClick={(e) => {
			e.preventDefault();
			onClick(category);
		}}
		className={
			isActive
				? "text-2xl font-light uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text"
				: "text-2xl font-light uppercase "
		}
	>
		{category}
	</a>
);

export default ProductsFilter;
