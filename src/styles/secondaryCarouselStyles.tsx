import { createStyles } from '@mantine/core';

export const secondaryCarousalStyles = createStyles(
	(theme) => ({
		container: {},
		content: {
			marginLeft: '0.1rem',
			marginTop: '0.5rem',
		},

		image: {
			img: {
				height: '350px',
				borderRadius: '1rem',
			},
		},

		rating: {},

		price: {},

		card: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'flex-start',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		},

		title: {
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			fontWeight: 400,
			color: theme.colors.dark,
			lineHeight: 0.9,
			fontSize: 16,
			marginTop: theme.spacing.xs,
			marginBottom: theme.spacing.xs,
			maxWidth: '80%',
		},

		category: {
			color: theme.white,
			opacity: 0.7,
			fontWeight: 400,
		},
	})
);
