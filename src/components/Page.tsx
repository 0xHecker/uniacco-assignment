import { ReactNode } from 'react';
import { navLinks } from '../consts/navLinks';
import pageStyles from '../styles/pageStyles';
import NavBar from './Navbar';

interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps): JSX.Element => {
	const { classes, cx } = pageStyles();
	return (
		<>
			<NavBar links={navLinks} />
			<div className={classes.container}>{children}</div>
		</>
	);
};

export default Page;
