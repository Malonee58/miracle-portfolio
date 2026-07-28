import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
	const { name, tagline, img } = personalDetails;
	const h11 = useRef();
	const h12 = useRef();
	const h13 = useRef();
	const paraRef = useRef();
	const ctaRef = useRef();
	const myimageref = useRef();
	const badgeRef = useRef();

	useEffect(() => {
		const tl = gsap.timeline();
		tl.from(
			h11.current,
			{
				x: "-100%",
				delay: 0.8,
				opacity: 0,
				duration: 2,
				ease: "Power3.easeOut",
			},
			"<",
		)
			.from(
				h12.current,
				{
					x: "-100%",
					delay: 0.5,
					opacity: 0,
					duration: 2,
					ease: "Power3.easeOut",
				},
				"<",
			)
			.from(
				h13.current,
				{
					x: "-100%",
					delay: 0.1,
					opacity: 0,
					duration: 2,
					ease: "Power3.easeOut",
				},
				"<",
			)
			.from(
				paraRef.current,
				{ y: 20, opacity: 0, duration: 1, ease: "Power3.easeOut" },
				"-=1.2",
			)
			.from(
				ctaRef.current,
				{ y: 20, opacity: 0, duration: 1, ease: "Power3.easeOut" },
				"-=0.9",
			)
			.from(
				myimageref.current,
				{
					x: "200%",
					delay: 0.5,
					opacity: 0,
					duration: 2,
					ease: "Power3.easeOut",
				},
				"<",
			)
			.from(
				badgeRef.current,
				{ y: 16, opacity: 0, duration: 0.8, ease: "Power3.easeOut" },
				"-=1",
			);
	}, []);

	return (
		<main className="relative overflow-hidden">
			{/* Ambient background: aurora glow + subtle dot grid */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-aurora opacity-70 dark:opacity-40" />
				<div className="absolute inset-0 dot-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
			</div>

			<div className="container mx-auto max-width section grid md:grid-cols-[1.1fr,0.9fr] gap-14 items-center min-h-[80vh]">
				<div>
					<h1
						ref={h11}
						className="text-3xl text-heading md:text-5xl xl:text-6xl xl:leading-[1.1] font-display font-bold"
					>
						Hi, I build
						<br />
						interfaces that
						<br />
					</h1>
					<h1
						ref={h12}
						className="text-3xl bg-clip-text bg-gradient text-transparent md:text-5xl xl:text-6xl xl:leading-[1.1] font-display font-bold"
					>
						feel effortless.
					</h1>
					<h2
						ref={h13}
						className="text-lg text-body md:text-xl font-medium pt-4"
					>
						I'm {name} — {tagline.replace(/^I am an?\s*/i, "").trim()}.
					</h2>

					<p ref={paraRef} className="text-body pt-6 max-w-xl leading-relaxed">
						{personalDetails.about}
					</p>

					<div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-10">
						<Link to="/projects" className="btn-primary">
							View Projects
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path
									d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
						<Link to="/contact" className="btn-secondary">
							Get in Touch
						</Link>
					</div>

					<div
						ref={badgeRef}
						className="flex flex-wrap items-center gap-2 pt-10"
					>
						{["ReactJS", "Tailwind CSS", "JavaScript", "HTML5", "NextJS"].map(
							(t) => (
								<span key={t} className="chip">
									{t}
								</span>
							),
						)}
					</div>
				</div>

				<div className="flex justify-center md:justify-end">
					<div className="relative">
						<div className="absolute -inset-6 rounded-full bg-gradient opacity-30 blur-2xl animate-float-slow" />
						<div className="absolute -top-6 -right-4 w-16 h-16 rounded-2xl border-soft bg-indigo-accent/40 dark:bg-indigo-accent/40 animate-float [animation-delay:1s]" />

						<div className="absolute -bottom-4 -left-6 w-12 h-12 rounded-full border-soft bg-purple-accent/40 dark:bg-purple-accent/40 animate-float [animation-delay:2s]" />
						<div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient shadow-glow">
							<div className="w-full h-full rounded-full bg-page p-1.5">
								<img
									ref={myimageref}
									src={img}
									alt={name}
									className="w-full h-full rounded-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="hidden md:flex justify-center pb-10">
				<div className="flex flex-col items-center gap-2 text-body">
					<span className="font-mono-tag">scroll</span>
					<span className="w-5 h-8 rounded-full border-soft flex justify-center pt-1.5">
						<span className="w-1 h-1.5 rounded-full bg-indigo-accent animate-float" />
					</span>
				</div>
			</div>
		</main>
	);
}

export default Home;
