// import { useState } from "react";

// interface ProductsProps {
// 	name: string;
// 	description: string;
// }

// function App() {
// 	const [name, setName] = useState("");
// 	const [description, setDescription] = useState("");
// 	const [dados, setDados] = useState<ProductsProps[]>([]);

// 	function handleProduct() {
// 		setDados([...dados, { name, description }]);
// 		setName("");
// 		setDescription("");
// 	}

// 	return (
// 		<>
// 			<input
// 				type="text"
// 				value={name}
// 				onChange={(e) => setName(e.target.value)}
// 			/>
// 			<input
// 				type="text"
// 				value={description}
// 				onChange={(e) => setDescription(e.target.value)}
// 			/>

// 			<button onClick={handleProduct}>Cadastrar</button>

// 			{dados.map((dado, index) => {
// 				return (
// 					<>
// 						<p>{dado.name}</p>
// 						<p>{dado.description}</p>
// 					</>
// 				);
// 			})}
// 		</>
// 	);
// }

// export default App;
