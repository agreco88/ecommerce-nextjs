import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Button = ({ children, className = "", ...args }) => (
	<button
		className={`rounded-lg py-2 px-4 bg-gray-500 text-white ${className}`}
		{...args}
	>
		{children}
	</button>
);

export const ButtonWrapper = () => {
	return <RoundedSlideButton />;
};

const RoundedSlideButton = () => {
	return (
		<button
			className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border
        border-black px-4 py-2 font-semibold
        uppercase text-black transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-orange-400
        before:transition-transform before:duration-1000
        before:content-[""]

      hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
		>
			<FiShoppingCart className="w-4" />
			<span>cart</span>
		</button>
	);
};

export const GradientShadowButton = ({ onClick, isActive, children }) => {
	return (
		<div
			className={`group relative w-fit transition-transform duration-300 ${
				isActive ? "active" : ""
			}`}
		>
			<button
				className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300"
				onClick={onClick}
			>
				<span
					className={`uppercase block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80 ${
						isActive
							? "bg-gradient-to-br from-indigo-500 to-fuchsia-500"
							: ""
					}`}
				>
					{children}
				</span>
			</button>
			<span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
		</div>
	);
};

export default Button;
