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

//https://api.themoviedb.org/3/movie/popular?api_key=51a098de9a510a6483af2fec881a9115&language=en-US&page=1
