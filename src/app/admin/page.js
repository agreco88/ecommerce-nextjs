"use client";
import React from "react";
import { useFormik } from "formik";
import Layout from "@/components/layout/Layout";

const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = "Name is required";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password must be at least 6 characters";
	}

	return errors;
};

const SimpleForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			password: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Layout>
			<form
				className="bg-gray-300 rounded shadow border border-gray-400 p-8 w-1/3 self-center flex flex-col gap-8"
				onSubmit={formik.handleSubmit}
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div>{formik.errors.name}</div>
					) : null}
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div>{formik.errors.password}</div>
					) : null}
				</div>

				<div className="flex flex-col gap-2 justify-center">
					<button
						className="uppercase block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</Layout>
	);
};

export default SimpleForm;
