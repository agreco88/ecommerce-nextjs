"use client";
import Layout from "@/components/layout/Layout";
import React from "react";
import MonitorPage from "@/components/page/MonitorPage";
import FurniturePage from "@/components/page/FurniturePage";
import LightingPage from "@/components/page/LightningPage";
import GadgetPage from "@/components/page/GadgetPage";
import AllProductsPage from "@/components/page/AllProductsPage";

export default function CategoryPage({ params }) {
	const category = params.category;

	const validCategories = new Set([
		"monitors",
		"furniture",
		"lightning",
		"gadgets",
	]);

	if (category === "all" || !validCategories.has(category)) {
		return (
			<Layout>
				<AllProductsPage />
			</Layout>
		);
	} else {
		switch (category) {
			case "monitors":
				return (
					<Layout>
						<MonitorPage />
					</Layout>
				);
			case "furniture":
				return (
					<Layout>
						<FurniturePage />
					</Layout>
				);
			case "lightning":
				return (
					<Layout>
						<LightingPage />
					</Layout>
				);
			case "gadgets":
				return (
					<Layout>
						<GadgetPage />
					</Layout>
				);
			default:
				return null;
		}
	}
}
