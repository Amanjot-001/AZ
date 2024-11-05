import React from 'react';
import { Chapter, Resource } from './types.ts';
import ResourceList from './ResourceList.tsx';
import ClockIcon from '../../../assets/chapters-icons/clock.svg'
import { ContestIcon } from '../../../assets/sidebar-icons/index.ts';
import { ArrowDownIcon, ArrowUpIcon } from '../../../assets/chapters-icons/index.ts';

interface ContentDetailsProps {
	chapter: Chapter;
}

const ContentDetails: React.FC<ContentDetailsProps> = ({ chapter }) => {
	const parts = [
		{
			id: 1,
			title: "Lorem Ipsum Dolor Sit Amet",
			duration: "02:00:00",
			difficulty: "Medium",
			completed: 45,
			resources: [
				{ id: 1, type: "Video", title: "Video 1", duration: "10:00" },
				{ id: 2, type: "Article", title: "Article 1", duration: "10:00" },
				{ id: 3, type: "Quiz", title: "Quiz 1", duration: "10:00" },
			],
		},
		{
			id: 2,
			title: "Lorem Ipsum Dolor Sit Amet",
			duration: "02:00:00",
			difficulty: "Medium",
			completed: 30,
			resources: [
				{ id: 1, type: "Video", title: "Video 1", duration: "10:00" },
				{ id: 2, type: "Article", title: "Article 1", duration: "10:00" },
				{ id: 3, type: "Quiz", title: "Quiz 1", duration: "10:00" },
			],
		},
	];

	return (
		<div className="flex flex-col w-full gap-4">
			{parts.map((part, index) => (
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
								<img src={ContestIcon} alt="time" className="w-4 h-4 text-[#17384D] fill-current" />
								{part.resources.length}
							</span>
							<span>
								<img src={ArrowUpIcon} alt="time" className="w-4 h-4 text-[#17384D] fill-current" />
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
					<ResourceList resources={part.resources} />
				</div>
			))}
		</div>
	);
};

export default ContentDetails;
