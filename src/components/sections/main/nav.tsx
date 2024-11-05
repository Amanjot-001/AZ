import React from "react";
import navItems from "../../../utils/nav.config";

const Nav: React.FC = () => {
	return (
		<div className="flex space-x-4 border-b border-gray-200 p-4">
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
	);
};

export default Nav;
