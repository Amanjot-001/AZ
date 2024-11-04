import React from "react";
import sidebarItems from "../../../utils/sidebar.config";

const Sidebar: React.FC = () => {
	return (
		<div className="flex flex-col h-full p-4">
			{sidebarItems.map((item, index) => (
				<div
					key={index}
					className={`flex items-center p-3 rounded-lg cursor-pointer 
                    ${item.isActive ?  "text-white" : "text-gray-400"} 
                    hover:bg-gray-700 hover:text-white transition`}
				>
					<img src={item.logo} alt={item.name} className="w-6 h-6 mr-3" />
					<span className="text-sm font-medium">{item.name}</span>
				</div>
			))}
		</div>
	);
};

export default Sidebar;
