import React from 'react';
import { Resource } from './types';

interface ResourceListProps {
	resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
	return (
		<div className="space-y-2">
			{resources.map((resource) => (
				<div key={resource.id} className="flex justify-between items-center p-2 border-b">
					<span>{resource.title}</span>
					<span className="text-gray-500">{resource.duration}</span>
				</div>
			))}
		</div>
	);
};

export default ResourceList;
