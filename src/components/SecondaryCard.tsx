import { Paper, Text, Title, Button } from '@mantine/core';
import { mainCarousalStyles } from '../styles/mainCarousalStyles';

export interface SecondaryCardProps {
	image?: string;
	title?: string;
	price?: string;
	rating?: string;
}
export function SecondaryCard({
	image,
}: SecondaryCardProps) {
	const { classes } = mainCarousalStyles();

	return <div></div>;
}
