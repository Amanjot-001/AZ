import React from 'react';
import { Chapter } from './types.ts';
import ClockIcon from '../../../assets/chapters-icons/clock.svg'

interface ChapterListProps {
	chapters: Chapter[];
	selectedChapter: Chapter | null;
	onSelectChapter: (chapter: Chapter) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, selectedChapter, onSelectChapter }) => {
	return (
		<div className="flex flex-col w-1/4">
			{chapters.map((chapter) => (
				<React.Fragment key={chapter.id}>
					<div
						onClick={() => onSelectChapter(chapter)}
						className={`flex justify-between items-center px-2 py-3 cursor-pointer rounded-md ${selectedChapter?.id === chapter.id ? 'bg-[#EFF5FF] font-medium' : ''
							}`}
					>
						{chapter.title}
						<span className="flex items-center gap-2 text-sm text-[#608AD2]">
							<img src={ClockIcon} alt="time" className="w-4 h-4 text-[#608AD2] stroke-[#608AD2]" />
							{chapter.duration}
						</span>
					</div>
					<div className="h-px bg-gradient-to-r from-white via-[#A4E6FF] to-white"></div>
				</React.Fragment>
			))}
		</div>
	);
};

export default ChapterList;
