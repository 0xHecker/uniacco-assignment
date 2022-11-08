import { Button, Menu, Text } from '@mantine/core';
import navStyles from '../styles/navstyles';
import { HamburgerSVG } from '../svg/hambrurger';
import { UserSVG } from '../svg/user';

const MenuDropDown = () => {
	const { classes, cx } = navStyles();
	return (
		<Menu shadow="md" width={200}>
			<Menu.Target>
				<Button className={classes.menuBtn}>
					<div className={classes.smIcon}>
						<HamburgerSVG />
					</div>
					<div className={classes.smIcon}>
						<UserSVG />
					</div>
				</Button>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Item>
					<b>Sign up</b>
				</Menu.Item>
				<Menu.Item>Login</Menu.Item>
				<Menu.Divider />
				<Menu.Item>Host your home</Menu.Item>
				<Menu.Item>Host an experience</Menu.Item>
				<Menu.Item
					rightSection={
						<Text size="xs" color="dimmed">
							⌘H
						</Text>
					}
				>
					Help
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};

export default MenuDropDown;
