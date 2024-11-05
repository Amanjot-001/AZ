import { Header, Sidebar, MainContent } from "./components/sections";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-primary-gradient p-14">
			<Header />

			<div className="flex">
				<Sidebar />
				<main className="p-8 mt-8 w-full bg-secondary_bg rounded-xl border border-[#A4E6FF]">
					<Routes>
						<Route path="/" element={<MainContent />} />
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default App;
