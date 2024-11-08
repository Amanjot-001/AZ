import React from "react";
import sidebarItems from "../../../utils/sidebar.config";

const Sidebar: React.FC = () => {
	return (
		<div className="flex flex-col h-full gap-2 mt-8 w-1/4">
			{sidebarItems.map((item, index) => (
				<div
					key={index}
					className={`flex items-center max-w-64 px-4 py-1 rounded-lg cursor-pointer
                    ${item.isActive ? "bg-[#D6F4FF]" : "bg-transparent"} 
                    transition`}
				>
					<img src={item.logo} alt={item.name} className="w-5 h-5" />
					<span className={`text-lg leading-10 font-dm-sans text-[#172B4D] ml-5 ${item.isActive ? "font-bold" : "font-normal"}`}>
						{item.name}
					</span>
				</div>
			))}
		</div>
	);
};

export default Sidebar;
