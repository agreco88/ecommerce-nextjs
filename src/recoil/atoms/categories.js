import { atom } from "recoil";

export const categoriesState = atom({
	key: "categoriesState",
	default: {
		categories: ["all", "monitors", "furniture", "lightning", "gadgets"],
	},
});
