import { Route, Routes } from 'react-router-dom';
import { MainContent } from '../components/sections';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<MainContent />} />
		</Routes>
	);
}

export default AppRoutes;
