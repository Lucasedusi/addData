import { useState } from "react";

interface Props {
	name: string;
	description: string;
}

function App() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [dados, setDados] = useState<Props[]>([]);

	function handleAddProducts() {
		setDados([...dados, { name, description }]);
		setName("");
		setDescription("");
	}

	return (
		<>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button type="submit" onClick={handleAddProducts}>
					Add Product
				</button>
			</form>

			{dados.map((dado) => {
				return (
					<>
						<p>{dado.name}</p>
						<p>{dado.description}</p>
					</>
				);
			})}
		</>
	);
}

export default App;
