"use client";
import Layout from "@/components/layout/Layout";
import ProductsFilter from "@/components/ui/ProductsFilter";
import React from "react";
import ProductsByCategoryList from "@/components/ui/ProductsByCategoryList";

const ProductsPage = () => {
	return (
		<Layout>
			<div className="flex flex-col justify-center h-[25rem]">
				<h1 className="text-3xl w-1/2">Products</h1>
				<h2 className="w-2/3">
					Appliances That Simplify, Furniture That Beautifies, Tech
					That Amazes{" "}
				</h2>
			</div>
			<div className="flex flex-col">
				<ProductsFilter />
				<ProductsByCategoryList category="all" />
			</div>
		</Layout>
	);
};

export default ProductsPage;
