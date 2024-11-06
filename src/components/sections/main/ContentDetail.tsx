import React, { useState, useEffect } from 'react';
import ResourceList from './ResourceList.tsx';
import { ArrowDownIcon, ArrowUpIcon, ClockIcon, CopyIcon, ContestIcon } from '../../../assets/chapters-icons/index.ts';
import { fetchChapters } from '../../../services/chapterService.ts';
import { Chapter } from './types.ts';

const ContentDetails: React.FC = () => {
	const [expandedParts, setExpandedParts] = useState<number[]>([]);
	const [chapters, setChapters] = useState<Chapter[]>([]);

	useEffect(() => {
		const getChapters = async () => {
			const data = await fetchChapters();
			setChapters(data);
		};
		getChapters();
	}, []);

	const togglePart = (id: number) => {
		setExpandedParts(prev =>
			prev.includes(id) ? prev.filter(partId => partId !== id) : [...prev, id]
		);
	};

	return (
		<div className="flex flex-col w-full gap-4">
			{chapters.map((part, index) => (
				<div className='border border-box border-[#A4E6FF] shadow-[0px_3.67px_3.67px_rgba(41,83,155,0.3)] rounded-lg'>
					<div key={index} className="flex justify-between p-4">
						<div className='flex flex-col'>
							<h2 className='font-normal text-[#17384D]'>PART {part.id}</h2>
							<h2 className="text-lg font-semibold">{part.title}</h2>
						</div>
						<div className="flex items-center gap-2">
							<span className="flex items-center gap-2 text-sm text-[#17384D]">
								<img src={ClockIcon} alt="time" className="w-4 h-4 text-[#17384D] fill-current" />
								{part.duration}
							</span>
							<span className="flex items-center gap-2 text-sm text-[#17384D]">
								<img src={ContestIcon} alt="time" className="w-4 h-4 text-[#17384D] fill-current" />
								{part.difficulty}
							</span>
							<span className="flex items-center gap-2 text-sm text-[#17384D]">
								<img src={CopyIcon} alt="time" className="w-4 h-4 text-[#17384D] fill-current" />
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
					<div className='flex justify-end items-center mb-2 px-4'>
						<span className='font-normal text-black text-xs w-max p-1 rounded-md bg-[#EFF5FF] border border-[#99E4FF]'>
							{part.completed}% Completed
						</span>
					</div>
					<div className="w-full bg-[#EFF5FF] rounded-b-2xl h-2">
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
