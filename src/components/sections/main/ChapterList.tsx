import React from 'react';
import ClockIcon from '../../../assets/chapters-icons/clock.svg'
import { ChapterListProps } from './types.ts';

const ChapterList: React.FC<ChapterListProps> = ({ chapters, selectedChapter, onSelectChapter }) => {
	return (
		<div className="flex flex-col w-1/4">
			{chapters.map((chapter) => (
				<React.Fragment key={chapter.id}>
					<div
						onClick={() => onSelectChapter(chapter)}
						className={`flex justify-between items-center font-dm-sans px-2 py-3 cursor-pointer rounded-md ${selectedChapter?.id === chapter.id ? 'bg-light_bg font-bold' : ''
							}`}
					>
						{chapter.title}
						<span className="flex items-center gap-2 text-sm text-[#608AD2]">
							<img src={ClockIcon} alt="time" className="w-4 h-4 text-[#608AD2] stroke-[#608AD2]" />
							{chapter.duration}
						</span>
					</div>
					<div className="h-px bg-gradient-to-r from-white via-primary_border to-white"></div>
				</React.Fragment>
			))}
		</div>
	);
};

export default ChapterList;
