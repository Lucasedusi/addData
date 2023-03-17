import axios from "axios";
import { useEffect, useState } from "react";

interface RepoProps {
	name: string;
}

function App() {
	const [repos, setRepos] = useState<RepoProps[]>([]);

	useEffect(() => {
		axios
			.get("https://api.github.com/users/somosprte/repos")
			.then((response) => setRepos(response.data));
	}, []);

	return (
		<>
			{repos.map((repo) => {
				return <p>{repo.name}</p>;
			})}
		</>
	);
}

export default App;
