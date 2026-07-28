import React from "react";
import Work from "../Components/Work";
import SectionHeading from "../Components/SectionHeading";
import useReveal from "../hooks/useReveal";
import {
	personalDetails,
	workDetails,
	eduDetails,
	aboutME,
	aboutMe,
} from "../Details";

function RevealSection({ children, className = "" }) {
	const ref = useReveal();
	return (
		<section ref={ref} className={`reveal ${className}`}>
			{children}
		</section>
	);
}

function About() {
	return (
		<main className="container mx-auto max-width section pb-28">
			<RevealSection>
				<SectionHeading eyebrow=" about me" title="A little about how I work" />
				<p className="text-body py-8 lg:max-w-3xl leading-relaxed text-lg">
					{aboutMe.about}
				</p>
			</RevealSection>

			<RevealSection className="pt-16">
				<SectionHeading eyebrow=" experience" title="Work Experience" />
				<div className="pt-10 max-w-3xl">
					{React.Children.toArray(
						workDetails.map(
							({ Position, Company, Location, Type, Duration }) => (
								<Work
									position={Position}
									company={Company}
									location={Location}
									type={Type}
									duration={Duration}
								/>
							),
						),
					)}
				</div>
			</RevealSection>

			<RevealSection className="pt-20">
				<SectionHeading eyebrow=" education" title="Education" />
				<div className="pt-10 max-w-3xl">
					{React.Children.toArray(
						eduDetails.map(
							({ Position, Company, Location, Type, Duration }) => (
								<Work
									position={Position}
									company={Company}
									location={Location}
									type={Type}
									duration={Duration}
								/>
							),
						),
					)}
				</div>
			</RevealSection>
		</main>
	);
}

export default About;
