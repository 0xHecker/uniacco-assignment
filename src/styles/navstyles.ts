import { createStyles } from '@mantine/core';

const navStyles = createStyles((theme) => ({
	root: {
		position: 'sticky',
		zIndex: 1,
		margin: 0,
	},

	navbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minWidth: '86vw',
		height: '100%',
		position: 'sticky',
	},

	links: {},

	menuBtn: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'transparent',
		borderRadius: theme.radius.lg,
		borderBlockWidth: '2px',
		width: '80px',
		height: '48px',
		padding: '5px 5px 5px 10px',
		borderColor: theme.colors.gray[2],
		transition: 'all 0.3s',

		'&:hover': {
			backgroundColor: 'transparent',
			boxShadow: '0px 4px 5px -3px rgba(0,0,0,0.35)',
		},
	},

	smIcon: {
		paddingLeft: '5px',
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '12px 15px',
		borderRadius: theme.radius.lg,
		textDecoration: 'none',
		color: theme.colors.dark,
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colors.gray[0],
		},

		[theme.fn.smallerThan('sm')]: {
			borderRadius: 0,
			padding: theme.spacing.md,
			display: 'none',
		},
	},
}));

export default navStyles;
