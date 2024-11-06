import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import ChapterList from "./ChapterList";
import ContentDetails from "./ContentDetail";
import { Chapter } from './types';
import { fetchChapters } from "../../../services/chapterService";

const MainContent: React.FC = () => {
	const [chapters, setChapters] = useState<Chapter[]>([]);
	const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(chapters[0]);

	useEffect(() => {
		const getChapters = async () => {
			const data = await fetchChapters();
			setChapters(data);
			setSelectedChapter(data[0]);
		};
		getChapters();
	}, []);

	return (
		<div className="flex flex-col">
			<Nav />
			<div className="flex gap-6 mt-8">
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