import { Header, Sidebar } from "./components/sections";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-primary-gradient">
			<Header />

			<div className="flex">
				<Sidebar />
				<main className="p-4 w-full bg-secondary_bg">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
			</div>
		</div>
	);
}

const Home = () => <div>Home Page</div>;

export default App;
