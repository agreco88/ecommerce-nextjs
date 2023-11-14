"use client";
import { motion } from "framer-motion";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { themeState } from "@/recoil/atoms/theme";

const TOGGLE_CLASSES =
	"text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-all duration-200 relative z-10";

const ThemeSwitcher = () => {
	const [selected, setSelected] = useRecoilState(themeState);
	return (
		<div className={`grid place-content-center px-4 transition-colors`}>
			<SliderToggle selected={selected} setSelected={setSelected} />
		</div>
	);
};

const SliderToggle = ({ selected, setSelected }) => {
	return (
		<div className="relative flex w-fit items-center rounded-full">
			<button
				className={`${TOGGLE_CLASSES} ${
					selected === "light"
						? "text-black opacity-100"
						: "text-white opacity-50"
				}`}
				onClick={() => {
					setSelected("light");
				}}
			>
				<FiSun className="relative z-10 text-lg md:text-sm" />
			</button>
			<button
				className={`${TOGGLE_CLASSES} ${
					selected === "dark"
						? "text-white opacity-100"
						: "text-black opacity-50"
				}`}
				onClick={() => {
					setSelected("dark");
				}}
			>
				<FiMoon className="relative z-10 text-lg md:text-sm" />
			</button>
			<div
				className={`absolute inset-0 z-0 flex ${
					selected === "dark" ? "justify-end" : "justify-start"
				}`}
			>
				<motion.span
					layout
					transition={{ type: "spring", damping: 15, stiffness: 250 }}
					className="h-full w-1/2 rounded-full "
				/>
			</div>
		</div>
	);
};

export default ThemeSwitcher;
