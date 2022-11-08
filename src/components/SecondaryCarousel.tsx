import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { mainCardData } from '../consts/mainCardData';
import { SecondaryCard } from './SecondaryCard';
import { secondaryCardData } from '../consts/secondaryCardData';

export interface MainCardProps {
	image: string;
	title: string;
	category: string;
}

export function SecondaryCarousel() {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(
		`(max-width: ${theme.breakpoints.sm}px)`
	);
	const slides = secondaryCardData.map((item) => (
		<Carousel.Slide key={item.title}>
			<SecondaryCard {...item} />
		</Carousel.Slide>
	));

	return (
		<>
			<h2>
				Plan a trip with help from local Hosts around the
				world
			</h2>
			<Carousel
				slideSize="15%"
				slideGap="md"
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
