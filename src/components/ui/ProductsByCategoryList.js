"use client";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productsByCategorySelector } from "@/recoil/selectors/productsByCategory";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import { categoryState } from "@/recoil/atoms/category";

function ProductsByCategoryList({ category }) {
	const setCategory = useSetRecoilState(categoryState);
	const products = useRecoilValue(productsByCategorySelector);

	useEffect(() => {
		setCategory(category);
	}, [setCategory]);

	const stagger = {
		hidden: { opacity: 0, y: 20 },
		visible: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.1,
			},
		}),
	};

	return (
		<div className="overflow-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-8 w-full gap-4">
			{products.map((product, index) => (
				<motion.div
					key={product.id}
					variants={stagger}
					custom={index}
					initial="hidden"
					animate="visible"
				>
					<ProductItem product={product} />
				</motion.div>
			))}
		</div>
	);
}

export default ProductsByCategoryList;
