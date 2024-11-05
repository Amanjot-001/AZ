export interface Chapter {
	id: number;
	title: string;
	duration: string;
}

export interface Resource {
	id: number;
	type: "Video" | "Article" | "Quiz" | "Coding Exercise";
	title: string;
	duration: string;
}
