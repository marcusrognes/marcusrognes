import 'dotenv/config';
import {GlassConfig} from '@glass/cli';
import {ThemeConfig} from "@blog/theme/theme/config";

const config: GlassConfig<ThemeConfig> = {
	theme: process.env.THEME_DIR,
	dist: "./docs",
	content: process.env.CONTENT_DIR,
	props: {
		title: "Rognes.guru",
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

