import { CalendarIcon, BriefcaseIcon } from "../assets/nav-icons";

interface NavItem {
	name: string;
	logo: string;
	isActive: boolean;
}

const navItems: NavItem[] = [
	{ name: "Mentor Sessions", logo: CalendarIcon, isActive: false },
	{ name: "Learning Material", logo: BriefcaseIcon, isActive: true },
];

export default navItems;