"use client";
import Layout from "@/components/layout/Layout";
import React from "react";
import { useRecoilValue } from "recoil";
import Button from "@/components/ui/Button";
import { productsState } from "@/recoil/atoms/products";

const ProductDetailPage = ({ params }) => {
	const products = useRecoilValue(productsState).products;

	const item = products.find((product) => {
		const selectedItem = product.slug === params.id.toLowerCase();
		return selectedItem;
	});

	return (
		<Layout>
			<div className="grid grid-cols-2 gap-8 p-8">
				<div className="col-span-1 self-center flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<h2 className="w-2/3">{item.name}</h2>
						<p>{item.description}</p>
					</div>
					<ul className="col-span-2 flex flex-col gap-2 list-disc list-inside">
						<li>TODO HIGHLIGHT</li>
						<li>TODO HIGHLIGHT</li>
						<li>TODO HIGHLIGHT</li>
					</ul>
					<div className="col-span-2">Weight: {item.weight} kgs</div>
					<Button className="w-1/3">TODO ADD TO CART</Button>
				</div>
				<div className="col-span-1 h-[25rem] opacity-50 flex justify-center items-center rounded-xl shadow-xl border-gray-100 border bg-gray-50">
					<p className="flex">{item.image}</p>
				</div>
			</div>
		</Layout>
	);
};

export default ProductDetailPage;
