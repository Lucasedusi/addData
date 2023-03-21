import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";

import { User } from "../../interfaces/User";
import { Input } from "@chakra-ui/react";

export function UserEdit() {
	const [users, setUsers] = useState<User>();

	const { register, handleSubmit, setValue } = useForm<User>();

	const navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		axios.get<User>(`http://localhost:3000/users/${id}`).then((response) => {
			setUsers(response.data);
			setValue("name", response.data.name);
			setValue("email", response.data.email);
		});
	}, [id, setValue]);

	const addProducts: SubmitHandler<User> = async (data: User) => {
		try {
			await axios.put<User>(`http://localhost:3000/users/${id}`, data);
		} catch (error) {
		} finally {
			navigate("/");
		}
	};

	if (!users) {
		return <div>Loading...</div>;
	}

	return (
		<form onSubmit={handleSubmit(addProducts)}>
			<Input type="text" {...register("name")} />
			<Input type="text" {...register("email")} />
			<button type="submit">Add</button>
		</form>
	);
}
