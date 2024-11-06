import { Header, Sidebar } from "./components/sections";
import AppRoutes from './routes';

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-primary-gradient p-14">
			<Header />

			<div className="flex justify-center gap-8">
				<Sidebar />
				<main className="p-8 mt-8 w-full bg-secondary_bg rounded-xl border border-[#A4E6FF]">
					<AppRoutes />
				</main>
			</div>
		</div>
	);
}

export default App;
