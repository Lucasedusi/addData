import { Route, Routes } from "react-router-dom";
import { UserCreate } from "./pages/Users/UserCreate";
import { UserList } from "./pages/Users/UserList";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<UserList />} />
			<Route path="/create" element={<UserCreate />} />
		</Routes>
	);
}
