import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";

type Props = {
	userId: number;
};

export function UserEdit({ userId }: Props) {
	const [users, setUsers] = useState<User[]>([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		axios.get(`http://localhost:3000/users/${userId}`).then(({ data }) => {
			setName(data.name);
			setEmail(data.email);
		});
	}, [userId]);

	const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			const updateUser: User = {
				id: userId,
				name,
				email,
			};

			await axios
				.put<User>(`http://localhost:3000/users/${userId}`, updateUser)
				.then(({ data }) => setUsers([...users, data]));
		} catch (error) {
		} finally {
			navigate("/");
		}
	};

	return (
		<>
			<h2>Editar usuário</h2>

			<form onSubmit={handleAdd}>
				<Input value={name} onChange={(e) => setName(e.target.value)} />
				<Input value={email} onChange={(e) => setEmail(e.target.value)} />
				<Button type="submit">Enviar</Button>
			</form>
		</>
	);
}
