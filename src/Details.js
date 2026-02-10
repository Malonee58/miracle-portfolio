// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo3.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/P1.jpg";
import projectImage2 from "./assets/projects/Pr2.jpg";
import projectImage3 from "./assets/projects/Pr3.jpg";
import projectImage4 from "./assets/projects/Pr4.jpg";
import projectImage5 from "./assets/projects/Pr5.jpg";
import projectImage6 from "./assets/projects/Pr6.jpg";
import projectImage7 from "./assets/projects/Pr8.jpg";

// Logos
export const logos = {
	logogradient: logogradient,
	logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
	name: "Miracle Philip",
	tagline: "I am a Frontend Web Developer",
	img: profile,
	about: `I’m a frontend developer focused on building clean, responsive, and user-friendly web interfaces. I turn designs into high-performance experiences using modern web technologies. Passionate about detail, accessibility, and continuous learning.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
	linkdein: "https://www.linkedin.com/in/miraclephilip58/",
	github: "https://www.github.com/Malonee58",
	twitter: "https://twitter.com/Malonee_58",
	instagram: "https://www.instagram.com/malonee_12",
};

// Enter your Work Experience here
export const workDetails = [
	{
		Position: "Frontend Web Developer",
		Company: `BlueWave Tech`,
		Location: "Lagos Nigeria",
		Type: "Contract",
		Duration: "March 2021 - June 2022",
	},
	{
		Position: "Web Developer (Remote)",
		Company: `Company Name here`,
		Location: "Toronto Canada",
		Type: "Internship",
		Duration: "July 2022 – November 2023",
	},
	{
		Position: "Web Developer/ICT Support Officer",
		Company: `Unander Nigeria Limited`,
		Location: "Utako, Abuja",
		Type: "Part Time",
		Duration: "March 2024 – Present",
	},
];

// Enter your Education Details here
export const eduDetails = [
	{
		Position: "Frontend Development",
		Company: "Udemy, YouTube, Google, Medium",
		Location: "Online",
		Type: "Full Time",
		Duration: "Jan 2022 - Present",
	},
	{
		Position: "Bachelor of Science in Political Science",
		Company: `Ambrose Alli University, Ekpoma`,
		Location: "Ekpoma, Edo State",
		Type: "Full Time",
		Duration: " 2020 - 2024",
	},
];

// Tech Stack and Tools
export const techStackDetails = {
	html: html,
	css: css,
	js: js,
	react: react,
	redux: redux,
	sass: sass,
	tailwind: tailwind,
	bootstrap: bootstrap,
	vscode: vscode,
	postman: postman,
	npm: npm,
	git: git,
	github: github,
	figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
	{
		title: "Modern Portfolio Interface",
		image: projectImage1,
		description: `A dynamic portfolio application built with React, featuring reusable components, smooth navigation, and interactive UI elements. Designed with a modular structure for easy scalability and maintenance.`,

		techstack: "React.js, JavaScript, Tailwind CSS",
		previewLink: "https://malonee58.github.io/miracle-portfolio/",
		githubLink: "https://github.com/Malonee58/miracle-portfolio",
	},
	{
		title: "Simple Next.js Personal Landing Page",
		image: projectImage2,
		description: `A minimal personal portfolio built with Next.js and TypeScript, focused on fast performance, clean structure, and straightforward presentation of projects and contact details.`,

		techstack: "Next.js, React, TypeScript, CSS",
		previewLink: "https://lucky-philip.vercel.app/",
		githubLink: "https://github.com/Malonee58/LuckyPhilip",
	},
	{
		title: "Shoply – Online Shop Template",
		image: projectImage3,
		description: `A modern e-commerce interface built with React, featuring product listings, category sections, and a clean, user-friendly layout. Designed as a reusable template for small online stores.`,

		techstack: "React.js, CSS, JavaScript",
		previewLink: "https://malonee58.github.io/shoply/",
		githubLink: "https://github.com/Malonee58/shoply",
	},
	{
		title: "YouTube UI Replica",
		image: projectImage4,
		description: `A static mockup of the YouTube homepage built with HTML and CSS. Recreated the core layout, thumbnails, and navigation elements to practice modern layout techniques.`,
		techstack: "HTML, CSS",
		previewLink: "https://google.com",
		githubLink: "https://github.com",
	},
	{
		title: "Spotify UI Replica",
		image: projectImage5,
		description: `A visual replica of the Spotify interface created with pure CSS. Focused on layout accuracy, spacing, and typography to closely match the original music streaming UI.`,
		techstack: "HTML, CSS",
		previewLink: "https://google.com",
		githubLink: "https://github.com",
	},
	{
		title: "Responsive Personal Landing Page",
		image: projectImage6,
		description: `A clean, responsive personal landing page designed to showcase profile details, services, and contact information. Built with a focus on performance, accessibility, and cross-device compatibility using core web technologies.`,

		techstack: "HTML, CSS, JavaScript",
		previewLink: "https://malonee58.github.io/miracleportfolio/",
		githubLink: "https://github.com/Malonee58/miracleportfolio",
	},
	{
		title: "Movie Explorer",
		image: projectImage7,
		description: `Movie Explorer is a responsive React web application built to strengthen API integration and front-end development skills. It allows users to search movies, view details, and manage favorites using real-time API data.`,

		techstack:
			"React (Vite), React Router, Context API, CSS, REST Movie API, pnpm, GitHub Pages",
		previewLink: "https://malonee58.github.io/Movie-explorer/",
		githubLink: "https://github.com/Malonee58/Movie-explorer",
	},
];

// Enter your Contact Details here
export const contactDetails = {
	email: "miraclemalonee58@gmail.com",
	phone: "+2349125383458",
};
