import React from "react";
import navItems from "../../../utils/nav.config";
import { InfoIcon } from "../../../assets/nav-icons";

const Nav: React.FC = () => {
	return (
		<div className="flex justify-between pb-8 border-b border-primary_border">
			<div className="flex space-x-4 rounded-xl bg-secondary-gradient px-3 py-2">
				{navItems.map((item) => (
					<div
						key={item.name}
						className={`flex items-center space-x-2 cursor-pointer px-3 py-2 rounded-lg ${item.isActive ? "bg-white shadow-[0px_3.67px_3.67px_rgba(41,83,155,0.3)] border border-primary_border box-border" : ""}`}
					>
						<img src={item.logo} alt={`${item.name} icon`} className="w-5 h-5 text-black" />
						<span className={`text-lg leading-10 font-dm-sans text-black ${item.isActive ? "font-bold" : "font-normal"}`}>{item.name}</span>
					</div>
				))}
			</div>
			<div className="flex items-center space-x-2 cursor-pointer my-2 px-3 py-2 rounded-lg border border-[#99E4FF]">
				<img src={InfoIcon} alt="info" className="w-5 h-5" />
				<span className="text-lg font-bold leading-10 font-dm-sans text-[#172B4D]">How it works</span>
			</div>
		</div>
	);
};

export default Nav;
