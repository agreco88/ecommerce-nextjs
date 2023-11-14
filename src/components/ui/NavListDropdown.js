"use client";
import React from "react";
import Link from "next/link";

const NavListDropdown = () => {
	return (
		<ul
			role="menu"
			aria-label="Product navigation links"
			className="opacity-0 flex flex-col group-hover:opacity-100 absolute top-8 left-0 bg-white p-2 shadow-md"
		>
			<li role="menuitem">
				<Link href="/products/monitors">Monitors</Link>
			</li>
			<li role="menuitem">
				<Link href="/products/furniture">Furniture</Link>
			</li>
			<li role="menuitem">
				<Link href="/products/lightning">Lighting</Link>
			</li>
			<li role="menuitem">
				<Link href="/products/gadgets">Gadgets</Link>
			</li>
		</ul>
	);
};

export default NavListDropdown;
