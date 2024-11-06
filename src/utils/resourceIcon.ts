import { PlayIcon, CodeIcon, CopyIcon, QuestionIcon } from '../assets/chapters-icons';

export const getIconForResourceType = (type: string) => {
	switch (type) {
		case 'Video':
			return PlayIcon;
		case 'Article':
			return QuestionIcon;
		case 'Quiz':
			return QuestionIcon;
		case 'Exercise':
			return CodeIcon;
		case 'Resource':
			return CopyIcon
		default:
			return QuestionIcon;
	}
};
