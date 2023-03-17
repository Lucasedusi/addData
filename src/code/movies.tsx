import axios from "axios";
import { useEffect, useState } from "react";

interface RepoProps {
	title: string;
}

function App() {
	const [repos, setRepos] = useState<RepoProps[]>([]);

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/movie/popular?api_key=51a098de9a510a6483af2fec881a9115&language=en-US&page=1"
			)
			.then((response) => setRepos(response.data.results));
	}, []);

	return (
		<>
			{repos.map((repo) => {
				return <p>{repo.title}</p>;
			})}
		</>
	);
}

export default App;
