import React from "react";
import SectionHeading from "../Components/SectionHeading";
import useReveal from "../hooks/useReveal";
import { techStackDetails } from "../Details";

function TechCard({ src, label, index }) {
	const ref = useReveal();
	return (
		<div
			ref={ref}
			style={{ transitionDelay: `${Math.min(index, 10) * 60}ms` }}
			className="reveal group card-surface flex flex-col items-center justify-center gap-3 p-5 aspect-square transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-glow hover:border-indigo-accent/40"
		>
			<img
				src={src}
				alt={label}
				className="w-9 h-9 md:w-10 md:h-10 object-contain grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
			/>
			<span className="font-mono-tag text-body group-hover:text-heading transition-colors">
				{label}
			</span>
		</div>
	);
}

function Technologies() {
	const {
		html,
		css,
		js,
		react,
		redux,
		tailwind,
		bootstrap,
		sass,
		vscode,
		git,
		github,
		npm,
		postman,
		figma,
	} = techStackDetails;

	const languages = [
		{ src: html, label: "HTML" },
		{ src: css, label: "CSS" },
		{ src: js, label: "JavaScript" },
		{ src: react, label: "React" },
		{ src: redux, label: "Redux" },
		{ src: tailwind, label: "Tailwind" },
		{ src: bootstrap, label: "Bootstrap" },
		{ src: sass, label: "SASS" },
	];

	const tools = [
		{ src: vscode, label: "VS Code" },
		{ src: git, label: "Git" },
		{ src: github, label: "GitHub" },
		{ src: figma, label: "Figma" },
		{ src: npm, label: "NPM" },
		{ src: postman, label: "Postman" },
	];

	return (
		<main className="container mx-auto max-width section pb-28">
			<section>
				<SectionHeading
					eyebrow=" stack"
					title="Tech Stack"
					description="Technologies I've been working with recently."
				/>
			</section>

			<section className="pt-14">
				<h2 className="font-mono-tag text-heading/70 pb-6">Languages &amp; Frameworks</h2>
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
					{languages.map((t, i) => (
						<TechCard key={t.label} src={t.src} label={t.label} index={i} />
					))}
				</div>
			</section>

			<section className="pt-16">
				<h2 className="font-mono-tag text-heading/70 pb-6">Tools</h2>
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
					{tools.map((t, i) => (
						<TechCard key={t.label} src={t.src} label={t.label} index={i} />
					))}
				</div>
			</section>
		</main>
	);
}

export default Technologies;
