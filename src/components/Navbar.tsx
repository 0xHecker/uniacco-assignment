import { Header, Container, Group } from '@mantine/core';
import navStyles from '../styles/navstyles';
import { AirBnbFull } from '../svg/airbnb';
import { GlobeSVG } from '../svg/globe';
import MenuDropDown from './MenuDropDown';

const HEADER_HEIGHT = 80;

interface NavBarProps {
	links: { link: string; label: string }[];
}

const NavBar = ({ links }: NavBarProps) => {
	const { classes, cx } = navStyles();

	// Incase if we need some more navbar menu links
	const items = links.map((link) => {
		return (
			<a
				key={link.label}
				href={link.link}
				className={cx(classes.link)}
				onClick={(event) => {
					event.preventDefault();
				}}
			>
				{link.label}
			</a>
		);
	});

	const globe = () => (
		<a
			href={'#'}
			className={classes.link}
			onClick={(event) => {
				event.preventDefault();
			}}
		>
			<GlobeSVG />
		</a>
	);

	return (
		<Header
			height={HEADER_HEIGHT}
			mb={20}
			className={classes.root}
		>
			<Container className={classes.navbar}>
				<AirBnbFull color="red" />
				<Group spacing={5} className={classes.links}>
					<>
						{items}
						{globe()}
						<MenuDropDown />
					</>
				</Group>
			</Container>
		</Header>
	);
};

export default NavBar;

{
	/*
, {[classes.linkActive]: active === link.link,}

	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
*/
}
