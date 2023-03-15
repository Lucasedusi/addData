import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ProductsProps {
	name: string;
	description: string;
}

function App() {
	const [products, setProducts] = useState<ProductsProps[]>([]);

	const { register, handleSubmit } = useForm<ProductsProps>();

	const addProducts: SubmitHandler<ProductsProps> = (data) => {
		const newProduct: ProductsProps = {
			name: data.name,
			description: data.description,
		};
		setProducts([...products, newProduct]);
	};

	return (
		<>
			<form onSubmit={handleSubmit(addProducts)}>
				<input type="text" {...register("name")} />
				<input type="text" {...register("description")} />
				<button type="submit">Add</button>
			</form>

			{products.map((product, index) => {
				return (
					<>
						<p>{product.name}</p>
						<p>{product.description}</p>
					</>
				);
			})}
		</>
	);
}

export default App;
