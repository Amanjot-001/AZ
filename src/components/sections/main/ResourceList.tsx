import React from 'react';
import { Resource } from './types';
import { ClockIcon } from '../../../assets/chapters-icons';

import { getIconForResourceType } from '../../../utils/resourceIcon';

interface ResourceListProps {
	resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
	return (
		<div className="space-y-2">
			{resources.map((resource) => {
				const IconComponent = getIconForResourceType(resource.type);

				return (
					<React.Fragment key={resource.id}>
						<div className="flex justify-between items-center font-dm-sans p-6">
							<span className='flex items-center gap-2'>
								<img src={IconComponent} alt="icon" className='w-5 h-5 text-[linear-gradient(90deg, #3467AE 7.81%, #0C4969 89.84%)] fill-current' />
								<p className='font-bold text-black'>{resource.title}</p>
							</span>
							<span className="flex items-center gap-2">
								<img src={ClockIcon} alt="icon" className='w-5 h-5 text-primary_font fill-primary_font' />
								<p className='font-normal text-primary_font'>{resource.duration}</p>
							</span>
						</div>
						<div className="h-px bg-[linear-gradient(90deg,_rgba(23,_43,_77,_0)_0%,_#172B4D_49.54%,_rgba(5,_68,_94,_0)_100%)]"></div>
					</React.Fragment>
				)
			})}
		</div>
	);
};

export default ResourceList;
