import { v4 } from 'uuid';

export const SUMMARY = [
	{
		id: v4(),
		name: 'Reaction',
		result: 80,
		icon: '/assets/images/icon-reaction.svg',
		color: 'red',
		bgColor: 'bg-red'
	},
	{
		id: v4(),
		name: 'Memory',
		result: 92,
		icon: '/assets/images/icon-memory.svg',
		color: 'yellow',
		bgColor: 'bg-yellow'
	},
	{
		id: v4(),
		name: 'Verbal',
		result: 61,
		icon: '/assets/images/icon-verbal.svg',
		color: 'green',
		bgColor: 'bg-green'
	},
	{
		id: v4(),
		name: 'Visual',
		result: 73,
		icon: '/assets/images/icon-visual.svg',
		color: 'blue',
		bgColor: 'bg-blue'
	}
];
