import 'dotenv/config';
import {GlassConfig} from '@glass/cli';

const config: GlassConfig = {
	theme: process.env.THEME_DIR,
	dist: "./docs",
	content: process.env.CONTENT_DIR,
	props: {
		mainMenu: [
			{
				label: "Home",
				href: "/"
			}
		],
		social: {
			linkedin: "https://www.linkedin.com/in/marcusrognes/"
		}
	}
};

export default config;

