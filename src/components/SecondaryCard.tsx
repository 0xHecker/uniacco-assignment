import { Paper, Text, Title, Button } from '@mantine/core';
import { secondaryCarousalStyles } from '../styles/secondaryCarouselStyles';
import { StarSVG } from '../svg/star';

export interface SecondaryCardProps {
	image?: string;
	title?: string;
	price?: string;
	rating?: string;
}

export function SecondaryCard({
	image,
	title,
	rating,
	price,
}: SecondaryCardProps) {
	const { classes } = secondaryCarousalStyles();

	return (
		<div className={classes.container}>
			<div className={classes.image}>
				<img src={image} alt={title} />
			</div>
			<div className={classes.content}>
				<div className={classes.rating}>
					<StarSVG /> 5.0(19)
					<span style={{ padding: '3px', color: 'grey' }}>
						&bull;
					</span>
					<span>Spain</span>
				</div>
				<div className={classes.title}>{title}</div>
				<div className={classes.price}>
					<b>From ₹{price}</b>/person
				</div>
			</div>
		</div>
	);
}
