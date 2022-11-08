import { Paper, Text, Title, Button } from '@mantine/core';
import { mainCarousalStyles } from '../styles/mainCarousalStyles';
import { MainCardProps } from './MainCarousel';

export function MainCard({
	image,
	title,
	category,
}: MainCardProps) {
	const { classes } = mainCarousalStyles();

	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			sx={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		>
			<div>
				<Text className={classes.category} size="xs">
					{category}
				</Text>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div>
			<Button variant="white" color="dark">
				Show all
			</Button>
		</Paper>
	);
}
