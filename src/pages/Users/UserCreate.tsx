import React, { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { User } from "../../interfaces/User";
import { Input } from "@chakra-ui/react";

export function UserCreate() {
	const [users, setUsers] = useState<User[]>([]);

	const { register, handleSubmit } = useForm<User>();

	const navigate = useNavigate();

	const addProducts: SubmitHandler<User> = async (data) => {
		const newProduct: User = {
			id: data.id + 1,
			name: data.name,
			email: data.email,
		};

		await axios
			.post<User>("http://localhost:3000/users", newProduct)
			.then(({ data }) => setUsers([...users, data]));

		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit(addProducts)}>
			<Input type="text" {...register("name")} />
			<Input type="text" {...register("email")} />
			<button type="submit">Add</button>
		</form>
	);
}
