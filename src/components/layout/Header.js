"use client";
import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ThemeSwticher from "../ui/ThemeSwitcher";
import Link from "next/link";
import Button from "../ui/Button";
import NavListDropdown from "../ui/NavListDropdown";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
	const [isCartVisible, setIsCartVisible] = useState(false);

	const handleCartClick = () => {
		// Toggle the visibility of the cart aside
		setIsCartVisible((prev) => !prev);
	};

	return (
		<header className="flex font-bold uppercase text-xs py-8 container mx-auto justify-between items-center">
			<Link className="w-32" href="/">
				Todo Logo
			</Link>
			<ul className="flex w-full justify-around items-center">
				<li className="relative group" aria-haspopup="true">
					<Link href="/products">Products</Link>
					<NavListDropdown />
				</li>
				<Link href="/about-us">About us</Link>
				<Link href="/contact">Contact</Link>
				<div>TODO Searchbar</div>
			</ul>
			<div className="flex  items-center justify-center">
				<Button className="flex" onClick={handleCartClick}>
					<ShoppingCartIcon className="w-6 h-6" />
					<span className="text-xs uppercase">MY CART</span>
				</Button>
			</div>

			<ThemeSwticher />

			{/* Cart Aside */}
			<AnimatePresence>
				{isCartVisible && (
					<motion.aside
						className="fixed flex flex-col gap-8  top-0 right-0 h-full w-1/4 p-8 shadow-lg"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
					>
						{/* Your cart content goes here */}
						<div
							className="cursor-pointer hover:underline"
							onClick={handleCartClick}
						>
							Close cart
						</div>
						<div className="w-full grid grid-cols-3 gap-8">
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
							<div className="flex h-20 items-center justify-center border border-gray-400 bg-gray-200 rounded">
								Item
							</div>
						</div>
						<div className="h-0.5 rounded-full w-full bg-gray-300"></div>
						<div className="w-full text-2xl flex justify-between items-center">
							<div className="w-1/2">TOTAL PRICE: 0.00</div>
							<Button className="w-1/2 text-base self-end">
								PROCEED TO CHECKOUT
							</Button>
						</div>
						<div className="h-0.5 rounded-full w-full bg-gray-300"></div>

						<div className="flex bg-gray-300 rounded shadow-inner flex-grow items-center justify-center text-xl">
							TODO FEATURED/RELATED ITEMS CARROUSEL
						</div>
					</motion.aside>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
