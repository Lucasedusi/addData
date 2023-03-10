import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface User {
	name: string;
	description: string;
	avatarUrl: string;
}

const users: User[] = [
	{
		name: "João Silva",
		description: "Programador experiente em JavaScript",
		avatarUrl: "https://via.placeholder.com/150",
	},
	{
		name: "Maria Santos",
		description: "Designer gráfico com habilidades em UI/UX",
		avatarUrl: "https://via.placeholder.com/150",
	},
	{
		name: "Pedro Almeida",
		description: "Gerente de projetos com experiência em metodologias ágeis",
		avatarUrl: "https://via.placeholder.com/150",
	},
];

const UserItem = () => {
	return (
		<Box>
			{users.map((user, index) => (
				<Flex alignItems="center" mb={4}>
					<Avatar mr={4} size="md" src={user.avatarUrl} />
					<Box>
						<Text fontWeight="bold">{user.name}</Text>
						<Text>{user.description}</Text>
					</Box>
				</Flex>
			))}
		</Box>
	);
};

export default UserItem;
