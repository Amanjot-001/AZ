export interface Chapter {
	id: number;
	title: string;
	duration: string;
	parts: []
}

export interface Part {
	id: number;
	title: string;
	duration: string;
	difficulty: string;
	completed: number;
	resources: Resource[];
}

export interface Resource {
	id: number;
	type: "Video" | "Article" | "Quiz" | "Exercise" | "Resource";
	title: string;
	duration: string;
}

export interface ChapterListProps {
	chapters: Chapter[];
	selectedChapter: Chapter | null;
	onSelectChapter: (chapter: Chapter) => void;
}
