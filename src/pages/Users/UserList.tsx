import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { User } from "../../interfaces/User";
import { Box, Text } from "@chakra-ui/react";

export function UserList() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const getUser = () => {
			try {
				axios.get<User[]>("http://localhost:3000/users").then((response) => {
					setUsers(response.data);
				});
			} catch (error) {
				console.log(error);
			}
		};

		getUser();
	}, []);

	function handleRemoveUser(id: number) {
		axios.delete(`http://localhost:3000/users/${id}`);

		const removeUser = users.filter((task) => task.id !== id);

		setUsers(removeUser);
	}

	return (
		<>
			<Box
				bgColor={"#fff"}
				width={"300px"}
				marginTop={"250px"}
				marginLeft={"560px"}
				padding={"20px"}
			>
				<Link to={"/create"}>Criar Usuário</Link>
				<h1>Listagem de Usuários</h1>
				<table>
					<thead>
						<tr>
							<th>Nome</th>
							<th>E-mail</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									<Link to={`/${user.id}/edit`}>
										<FaEdit />
									</Link>
								</td>
								<td>
									<button
										type="button"
										onClick={() => handleRemoveUser(user.id)}
									>
										<FaTrash />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Box>
			<Text
				bg={"#727CF5"}
				padding={"10px"}
				margin={"10px"}
				color={"#fff"}
				textAlign={"center"}
				fontSize={"16px"}
			>
				Listagem de Usuários
			</Text>
		</>
	);
}
