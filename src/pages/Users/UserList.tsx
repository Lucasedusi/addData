import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { User } from "../../interfaces/User";

export function UserList() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		axios.get<User[]>("http://localhost:3000/users").then((response) => {
			setUsers(response.data);
		});
	}, []);

	return (
		<div>
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
								<Link to={`/users/${user.id}`}>
									<FaEdit />
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
