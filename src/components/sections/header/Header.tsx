import React from "react";
import { BellIcon, Logo, MenuIcon } from "../../../assets/header-icons";

const Header: React.FC = () => {
	return (
		<header className="flex items-center justify-between px-3">
			<div className="flex items-center">
				<img src={MenuIcon} alt="menu" className="mr-6 w-8 h-8" />
				<img src={Logo} alt="AlgoZenith" />
			</div>

			<div className="flex items-center">
				<div className="px-4 py-3 bg-[#E7F8FF] rounded-md">
					<img src={BellIcon} alt="notification" className="w-5 h-6 cursor-pointer" />
				</div>
				<div className="w-16 h-16 ml-6 rounded-full bg-[#D9D9D9] cursor-pointer">
				</div>
			</div>
		</header>
	);
}

export default Header;