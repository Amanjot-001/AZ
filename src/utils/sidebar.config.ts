import { DashIcon, BulbIcon, GroupIcon, ClipboardIcon, ContestIcon, StarIcon } from "../assets/sidebar-icons";

interface SidebarItem {
	name: string;
	logo: string;
	path: string;
	isActive: boolean;
}


const sidebarItems: SidebarItem[] = [
	{ name: "DashBoard", logo: DashIcon, path: "/dashboard", isActive: false },
	{ name: "Learn", logo: BulbIcon, path: "/learn", isActive: false },
	{ name: "Forums", logo: GroupIcon, path: "/forums", isActive: false },
	{ name: "Upskill", logo: ClipboardIcon, path: "/upskill", isActive: false },
	{ name: "Contest", logo: ContestIcon, path: "/contest", isActive: false },
	{ name: "Leaderboard", logo: StarIcon, path: "/leaderboard", isActive: false },
];

export default sidebarItems;