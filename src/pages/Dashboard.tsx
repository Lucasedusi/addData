import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	FormControl,
	FormLabel,
	Input,
	Text,
	ModalCloseButton,
	Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface ProductProps {
	name: string;
	price: string;
}

export const CustomModal = () => {
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newProduct = { name, price };

		axios
			.post<ProductProps>("http://localhost:3000/products", newProduct)
			.then(({ data }) => setProducts([...products, data]));

		setIsOpen(false);
	};

	useEffect(() => {
		axios
			.get("http://localhost:3000/products")
			.then((response) => setProducts(response.data));
	}, []);

	return (
		<>
			<Button onClick={handleOpenModal}>Open Modal</Button>
			<Modal isOpen={isOpen} onClose={handleCloseModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create your account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<form onSubmit={handleSave}>
							<FormLabel>First name</FormLabel>
							<Input
								placeholder="First name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							<FormControl mt={4}>
								<FormLabel>Last name</FormLabel>
								<Input
									placeholder="Last name"
									name={price}
									onChange={(e) => setPrice(e.target.value)}
								/>
							</FormControl>

							<Button type="submit" colorScheme="blue" mr={3}>
								Save
							</Button>
							<Button onClick={handleCloseModal}>Cancel</Button>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>

			{products.map((product) => {
				return (
					<>
						<Box gap={2} bg={"#00f"}>
							<Text margin={"20px"}>{product.name}</Text>
							<Text>{product.price}</Text>
						</Box>
					</>
				);
			})}
		</>
	);
};
