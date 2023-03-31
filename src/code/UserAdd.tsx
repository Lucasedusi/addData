import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { FormEvent, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";
import Select from "react-select";

interface OptionType {
	value: string;
	label: string;
}

const options: OptionType[] = [
	{ value: "option1", label: "Opção 1" },
	{ value: "option2", label: "Opção 2" },
];

export function UserAdd() {
	const [users, setUsers] = useState<User[]>([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

	const handleChange = (option: OptionType | null) => {
		setSelectedOption(option);
	};

	const navigate = useNavigate();

	const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			const AddUser = {
				name,
				email,
				selectedOption,
			};

			console.log(AddUser);

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

				<Select
					placeholder="Selecione"
					value={selectedOption}
					onChange={handleChange}
					options={options}
				/>
				<Button type="submit">Enviar</Button>
			</form>
		</>
	);
}
