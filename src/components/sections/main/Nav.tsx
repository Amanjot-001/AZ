import React from "react";
import navItems from "../../../utils/nav.config";
import { InfoIcon } from "../../../assets/nav-icons";

const Nav: React.FC = () => {
	return (
		<div className="flex justify-between border-b p-4">
			<div className="flex space-x-4">
				{navItems.map((item) => (
					<div
						key={item.name}
						className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md ${item.isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-600"
							}`}
					>
						<img src={item.logo} alt={`${item.name} icon`} className="w-5 h-5" />
						<span>{item.name}</span>
					</div>
				))}
			</div>
			<div className="flex items-center space-x-2 cursor-pointer p-2 rounded-md">
				<img src={InfoIcon} alt="info" />
				<span>How it works</span>
			</div>
		</div>
	);
};

export default Nav;
