import { ColorInput, createStyles } from '@mantine/core';

const navStyles = createStyles((theme) => ({
	root: {
		zIndex: 1,
		margin: 0,
	},
	btnContainer: {
		margin: '1.5rem 0 2.5rem 0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '3rem',

		[theme.fn.smallerThan('xl')]: {
			flexDirection: 'column',
		},
	},

	nonCarouselBtns: {
		display: 'inline-block',
		textDecoration: 'none',
		padding: '3px 10px',
		color: theme.colors.gray[8],
		marginLeft: '5px',
		borderRadius: theme.radius.lg,
		width: 'fit-content',
		border: `solid ${theme.colors.gray[4]} 1px`,
		fontSize: '14px',
		'&:hover': {
			borderColor: 'black',
		},
	},

	carouselContainer: {
		width: '80%',
		marginLeft: '2rem',
		paddingLeft: '1rem',
		borderLeft: 'solid grey 2px',
		[theme.fn.smallerThan('xl')]: {
			borderLeft: 'solid grey 0px',
			marginTop: '1rem',
			marginLeft: '0',
			width: '100%',
		},
	},
	carouselBtns: {
		display: 'inline-block',
		textDecoration: 'none',
		padding: '3px 10px',
		color: theme.colors.gray[8],
		borderRadius: theme.radius.lg,
		width: 'max-content',
		backgroundColor: theme.colors.gray[1],
		fontSize: '14px',
	},
}));

export default navStyles;
