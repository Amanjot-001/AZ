import React from 'react';
import { Chapter, Resource } from './types.ts';
import ResourceList from './ResourceList.tsx';

interface ContentDetailsProps {
	chapter: Chapter;
}

const ContentDetails: React.FC<ContentDetailsProps> = ({ chapter }) => {
	const parts = [
		{
			title: "Part 1: Lorem Ipsum Dolor Sit Amet",
			duration: "02:00:00",
			difficulty: "Medium",
			resources: [
				{ id: 1, type: "Video", title: "Video 1", duration: "10:00" },
				{ id: 2, type: "Article", title: "Article 1", duration: "10:00" },
				{ id: 3, type: "Quiz", title: "Quiz 1", duration: "10:00" },
			],
		},
	];

	return (
		<div className="w-3/4 p-4">
			{parts.map((part, index) => (
				<div key={index} className="mb-6">
					<h2 className="text-xl font-semibold mb-2">{part.title}</h2>
					<div className="text-gray-500 mb-2">
						{part.duration} | {part.difficulty}
					</div>
					<ResourceList resources={part.resources} />
				</div>
			))}
		</div>
	);
};

export default ContentDetails;
