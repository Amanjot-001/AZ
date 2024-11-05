import React, { useState } from "react";
import Nav from "./Nav";
import ChapterList from "./ChapterList";
import ContentDetails from "./ContentDetail";
import { Chapter, Resource } from './types';

const chapters: Chapter[] = [
	{ id: 1, title: "Chapter 1", duration: "05:00:00" },
	{ id: 2, title: "Chapter 2", duration: "04:30:00" },
];

const MainContent: React.FC = () => {
	const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(chapters[0]);

	return (
		<div>
			<Nav />
			<div className="flex">
				<ChapterList
					chapters={chapters}
					selectedChapter={selectedChapter}
					onSelectChapter={setSelectedChapter}
				/>
				{selectedChapter && <ContentDetails chapter={selectedChapter} />}
			</div>
		</div>
	)
}

export default MainContent;