import React from 'react';
import { Resource } from './types';
import { PlayIcon, CodeIcon, CopyIcon, QuestionIcon } from '../../../assets/chapters-icons';

interface ResourceListProps {
	resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
	return (
		<div className="space-y-2">
			{resources.map((resource) => (
				<React.Fragment key={resource.id}>
					<div className="flex justify-between items-center p-6">
						<span className='flex items-center gap-2'>
							<img src={PlayIcon} alt="icon" className='w-5 h-5 text-[linear-gradient(90deg, #3467AE 7.81%, #0C4969 89.84%)] fill-current' />
							<p className='font-medium text-black'>{resource.title}</p>
						</span>
						<span className="flex items-center gap-2">
							<img src={PlayIcon} alt="icon" className='w-5 h-5 text-[#17384D] fill-[#17384D]' />
							<p className='font-normal text-[#17384D]'>{resource.duration}</p>
						</span>
					</div>
					<div className="h-px bg-[linear-gradient(90deg,_rgba(23,_43,_77,_0)_0%,_#172B4D_49.54%,_rgba(5,_68,_94,_0)_100%)]"></div>
				</React.Fragment>
			))}
		</div>
	);
};

export default ResourceList;
