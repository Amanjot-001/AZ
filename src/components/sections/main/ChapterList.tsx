import React from 'react';
import { Chapter } from './types.ts';

interface ChapterListProps {
	chapters: Chapter[];
	selectedChapter: Chapter | null;
	onSelectChapter: (chapter: Chapter) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, selectedChapter, onSelectChapter }) => {
	return (
		<div className="w-1/4 p-4 bg-gray-100 border-r">
			{chapters.map((chapter) => (
				<div
					key={chapter.id}
					onClick={() => onSelectChapter(chapter)}
					className={`p-2 cursor-pointer ${selectedChapter?.id === chapter.id ? 'bg-blue-100' : ''
						}`}
				>
					{chapter.title} <span className="text-sm text-gray-500">{chapter.duration}</span>
				</div>
			))}
		</div>
	);
};

export default ChapterList;
