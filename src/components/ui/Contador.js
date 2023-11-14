"use client";
import React, { useState } from "react";

export default function Contador() {
	const [counter, setCounter] = useState(0);

	const handleCounterClick = () => {
		setCounter(counter + 1);
	};
	return (
		<button className="p-4 bg-red-500" onClick={handleCounterClick}>
			{counter}
		</button>
	);
}
