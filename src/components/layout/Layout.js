"use client";
import React from "react";
import Header from "./Header";
import { themeState } from "@/recoil/atoms/theme";
import { useRecoilValue } from "recoil";

export default function Layout({ children }) {
	const theme = useRecoilValue(themeState);

	const lightTheme =
		"text-black bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300";
	const darkTheme = "text-white bg-neutral-700";

	return (
		<main
			className={`w-screen min-h-[100vh] dark:bg-red flex flex-col justify-between transition-colors ${
				theme === "light" ? lightTheme : darkTheme
			}`}
		>
			<Header />
			<div className="container mx-auto flex flex-col h-full">
				{children}
			</div>
			<footer
				className={`w-full container mx-auto flex jusitfy-center text-center items-center h-60`}
			>
				<span className="dark:text-red-500">TODO Footer</span>
			</footer>
		</main>
	);
}
