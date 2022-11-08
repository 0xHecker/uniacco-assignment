import { Carousel } from '@mantine/carousel';
import { Group, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import {
	nonCarouselBtns,
	carouselButtons,
} from '../consts/buttonLables';
import buttonCarouselStyles from '../styles/buttonCarouselStyles';

const TextCarousel = () => {
	const { classes, cx } = buttonCarouselStyles();

	const borderButtons = nonCarouselBtns.map((item) => {
		return (
			<a
				key={item}
				href={'#'}
				className={classes.nonCarouselBtns}
				onClick={(e) => {
					e.preventDefault();
				}}
			>
				{item}
			</a>
		);
	});

	const CarouselBtns = carouselButtons.map((item) => (
		<Carousel.Slide size="fi-content" key={item}>
			<a
				href={'#'}
				className={classes.carouselBtns}
				onClick={(e) => {
					e.preventDefault();
				}}
			>
				{item}
			</a>
		</Carousel.Slide>
	));

	const theme = useMantineTheme();

	const mobile = useMediaQuery(
		`(max-width: ${theme.breakpoints.sm}px)`
	);
	return (
		<div className={classes.btnContainer}>
			<Group>{borderButtons}</Group>
			<div className={classes.carouselContainer}>
				<Carousel
					sx={{ maxWidth: '100%' }}
					mx="auto"
					slideSize="10%"
					align="start"
					slideGap="sm"
					dragFree
					slidesToScroll={mobile ? 2 : 4}
					styles={{
						control: {
							'&[data-inactive]': {
								opacity: 0,
								cursor: 'default',
							},
						},
					}}
				>
					{CarouselBtns}
				</Carousel>
			</div>
		</div>
	);
};

export default TextCarousel;
