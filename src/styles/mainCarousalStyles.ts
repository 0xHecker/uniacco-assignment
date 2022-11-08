import { createStyles } from '@mantine/core';

export const mainCarousalStyles = createStyles((theme) => ({
	card: {
		height: 350,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 500,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: 28,
		marginTop: theme.spacing.xs,
		maxWidth: '60%',
	},

	category: {
		color: theme.white,
		opacity: 0.7,
		fontWeight: 700,
		textTransform: 'uppercase',
	},
}));
