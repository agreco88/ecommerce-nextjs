import { atom } from "recoil";

export const selectedProductState = atom({
	key: "selectedProductState",
	default: {
		id: 0,
		name: "",
		price: 0,
		category: "",
		weight: 0,
		description: "",
		image: "",
	},
});
