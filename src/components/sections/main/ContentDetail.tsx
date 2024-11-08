import React, { useState } from 'react';
import ResourceList from './ResourceList.tsx';
import { ArrowDownIcon, ArrowUpIcon, ClockIcon, CopyIcon, ContestIcon } from '../../../assets/chapters-icons/index.ts';
import { Chapter, Part } from './types.ts';

interface ContentDetailsProps {
	chapter: Chapter;
}


const ContentDetails: React.FC<ContentDetailsProps> = ({ chapter }) => {
	const [expandedParts, setExpandedParts] = useState<number[]>([1]);

	const togglePart = (id: number) => {
		setExpandedParts(prev =>
			prev.includes(id) ? prev.filter(partId => partId !== id) : [...prev, id]
		);
	};

	return (
		<div className="flex flex-col w-full gap-4">
			{chapter.parts.map((part: Part) => (
				<div key={part.id} className='border border-box border-primary_border shadow-[0px_3.67px_3.67px_rgba(41,83,155,0.3)] rounded-lg'>
					<div className="flex justify-between p-4 font-dm-sans">
						<div className='flex flex-col'>
							<h2 className='font-normal text-primary_font'>PART {part.id}</h2>
							<h2 className="text-lg font-semibold">{part.title}</h2>
						</div>
						<div className="flex items-center gap-2">
							<span className="flex items-center gap-2 text-sm text-primary_font">
								<img src={ClockIcon} alt="time" className="w-4 h-4 text-primary_font fill-current" />
								{part.duration}
							</span>
							<span className="flex items-center gap-2 text-sm text-primary_font">
								<img src={ContestIcon} alt="time" className="w-4 h-4 text-primary_font fill-current" />
								{part.difficulty}
							</span>
							<span className="flex items-center gap-2 text-sm text-primary_font">
								<img src={CopyIcon} alt="time" className="w-4 h-4 text-primary_font fill-current" />
								{part.resources.length}
							</span>
							<span onClick={() => togglePart(part.id)} className="cursor-pointer">
								<img
									src={expandedParts.includes(part.id) ? ArrowUpIcon : ArrowDownIcon}
									alt="toggle"
									className="w-4 h-4"
								/>
							</span>
						</div>
					</div>
					<div className='flex justify-end items-center mb-2 px-4 font-dm-sans'>
						<span className='font-normal text-black text-xs w-max p-1 rounded-md bg-light_bg border border-[#99E4FF]'>
							{part.completed}% Completed
						</span>
					</div>
					<div className="w-full bg-light_bg rounded-b-2xl h-2">
						<div
							className="h-full bg-[#172B4DD9] rounded-bl-2xl"
							style={{ width: `${part.completed}%` }}
						></div>
					</div>
					{expandedParts.includes(part.id) && (
						<ResourceList resources={part.resources} />
					)}
				</div>
			))}
		</div>
	);
};

export default ContentDetails;
