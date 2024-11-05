import React from "react";
import { BellIcon, MenuIcon } from "../../../assets/header-icons";

const Header: React.FC = () => {
	return (
		<header className="flex items-center justify-between p-4 bg-white shadow-md">
			<div className="flex items-center">
				<img src={MenuIcon} alt="menu" className="mr-2 w-6 h-6" />
				<span className="text-xl font-bold text-gray-800">AlgoZenith</span>
			</div>

			<div className="flex items-center">
				<img src={BellIcon} alt="notification" className="mr-4 w-6 h-6 cursor-pointer" />
				<div className="w-9 h-9 rounded-full bg-gray-300 cursor-pointer flex items-center justify-center">
					<span className="text-gray-600">P</span>
				</div>
			</div>
		</header>
	);
}

export default Header;