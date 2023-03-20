import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { FormEvent, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";

export function UserAdd() {
	const [users, setUsers] = useState<User[]>([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const navigate = useNavigate();

	const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			const AddUser = {
				name,
				email,
			};

			await axios
				.post<User>("http://localhost:3000/users", AddUser)
				.then(({ data }) => setUsers([...users, data]));
		} catch (error) {
		} finally {
			navigate("/");
		}
	};

	return (
		<>
			<form onSubmit={handleAdd}>
				<Input value={name} onChange={(e) => setName(e.target.value)} />
				<Input value={email} onChange={(e) => setEmail(e.target.value)} />
				<Button type="submit">Enviar</Button>
			</form>
		</>
	);
}
