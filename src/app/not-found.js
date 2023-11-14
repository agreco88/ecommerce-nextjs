"use client";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import React from "react";
import Button from "@/components/ui/Button";

const ProductsPage = () => {
	const router = useRouter();
	return (
		<Layout>
			<div className="flex flex-col justify-center font-bold text-6xl h-[25rem]">
				404
			</div>
			<Button className="w-1/3" onClick={() => router.back()}>
				Take me home
			</Button>
		</Layout>
	);
};

export default ProductsPage;
