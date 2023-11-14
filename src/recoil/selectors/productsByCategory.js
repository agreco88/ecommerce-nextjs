import { selector } from "recoil";
import { productsState } from "../atoms/products";
import { categoryState } from "../atoms/category";

export const productsByCategorySelector = selector({
	key: "productsByCategorySelector",
	get: ({ get }) => {
		const category = get(categoryState);
		const products = get(productsState).products;

		switch (category) {
			case "monitors":
				return (
					products.filter(
						(product) => product.category === "monitors"
					) || []
				);
			case "furniture":
				return (
					products.filter(
						(product) => product.category === "furniture"
					) || []
				);
			case "lightning":
				return (
					products.filter(
						(product) => product.category === "lightning"
					) || []
				);
			case "gadgets":
				return (
					products.filter(
						(product) => product.category === "gadgets"
					) || []
				);
			case "all":
				return products;
			default:
				return [];
		}
	},
});
