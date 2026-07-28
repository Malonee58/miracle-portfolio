import React from "react";
import { NavLink } from "react-router-dom";
import { personalDetails, socialMediaUrl, contactDetails } from "../Details";

function Footer() {
	const year = new Date().getFullYear();
	const { linkdein, github, twitter } = socialMediaUrl;

	return (
		<footer className="border-t border-soft mt-32 bg-page">
			<div className="container mx-auto max-width py-14">
				<div className="grid md:grid-cols-3 gap-10 md:gap-6">
					<div>
						<NavLink
							to="/"
							className="font-display font-semibold text-heading text-lg text-indigo-accent"
						>
							{personalDetails.name}
							<span className="text-indigo-accent">.</span>
						</NavLink>
						<p className="text-body text-sm mt-3 max-w-xs leading-relaxed">
							{personalDetails.tagline} — building clean, considered interfaces
							for the web.
						</p>
					</div>

					<div>
						<h3 className="font-mono-tag text-heading/70 mb-4">Navigate</h3>
						<ul className="space-y-2 text-sm">
							{[
								{ to: "/about", label: "About" },
								{ to: "/technologies", label: "Stack" },
								{ to: "/projects", label: "Projects" },
								{ to: "/contact", label: "Contact" },
							].map((l) => (
								<li key={l.to}>
									<NavLink
										to={l.to}
										className="text-body hover:text-indigo-accent transition-colors"
									>
										{l.label}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-mono-tag text-heading/70 mb-4">Connect</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href={`mailto:${contactDetails.email}`}
									className="text-body hover:text-indigo-accent transition-colors"
								>
									{contactDetails.email}
								</a>
							</li>
							<li className="flex gap-4 pt-2">
								<a
									href={twitter}
									target="_blank"
									rel="noreferrer noopener"
									className="text-body hover:text-indigo-accent transition-colors"
								>
									Twitter
								</a>
								<a
									href={linkdein}
									target="_blank"
									rel="noreferrer noopener"
									className="text-body hover:text-indigo-accent transition-colors"
								>
									LinkedIn
								</a>
								<a
									href={github}
									target="_blank"
									rel="noreferrer noopener"
									className="text-body hover:text-indigo-accent transition-colors"
								>
									GitHub
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-soft mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-body text-center sm:text-left leading-relaxed">
						© {year} {personalDetails.name}. Crafted with precision and passion
						by{" "}
						<a
							className="font-semibold text-indigo-accent hover:text-purple-accent transition-colors duration-300"
							href="https://github.com/Malonee58"
							target="_blank"
							rel="noreferrer noopener"
						>
							Malonee58
						</a>
						.
					</p>

					<p className="text-xs text-body text-center sm:text-right">
						Designed to create exceptional digital experiences. Built with{" "}
						<span className="text-gradient font-semibold">Love</span>,{" "}
						<span className="text-gradient font-semibold">Coffee</span>, and{" "}
						<span className="text-gradient font-semibold">Curiosity</span>.
					</p>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
