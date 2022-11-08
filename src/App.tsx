import { MantineProvider, Text } from '@mantine/core';
import { MainCarousel } from './components/MainCarousel';
import Page from './components/Page';
import { SecondaryCarousel } from './components/SecondaryCarousel';
import TextCarousel from './components/TextCarousel';

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Page>
				<MainCarousel />
				<TextCarousel />
				<SecondaryCarousel></SecondaryCarousel>
			</Page>
		</MantineProvider>
	);
}
