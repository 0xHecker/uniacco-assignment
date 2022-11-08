import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { mainCardData } from '../consts/mainCardData';
import { MainCard } from './MainCard';

export interface MainCardProps {
	image: string;
	title: string;
	category: string;
}

export function MainCarousel() {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(
		`(max-width: ${theme.breakpoints.sm}px)`
	);
	const slides = mainCardData.map((item) => (
		<Carousel.Slide key={item.title}>
			<MainCard {...item} />
		</Carousel.Slide>
	));

	return (
		<>
			<h1>New this week</h1>
			<Carousel
				slideSize="40%"
				slideGap="xl"
				align="start"
				slidesToScroll={mobile ? 1 : 2}
				breakpoints={[
					{
						maxWidth: 'sm',
						slideSize: '100%',
						slideGap: 2,
					},
				]}
				styles={{
					control: {
						'&[data-inactive]': {
							opacity: 0,
							cursor: 'default',
						},
					},
				}}
			>
				{slides}
			</Carousel>
		</>
	);
}
