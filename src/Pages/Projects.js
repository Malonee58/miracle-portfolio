import React from "react";
import Project from "../Components/Project";
import SectionHeading from "../Components/SectionHeading";
import { projectDetails } from "../Details";

function Projects() {
	return (
		<main className="container mx-auto max-width section pb-28">
			<section>
				<SectionHeading
					eyebrow=" selected work"
					title="Projects"
					description="A few things I've built recently — from production interfaces to weekend experiments."
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
					{React.Children.toArray(
						projectDetails.map(
							(
								{ title, image, description, techstack, previewLink, githubLink },
								i
							) => (
								<Project
									title={title}
									image={image}
									description={description}
									techstack={techstack}
									previewLink={previewLink}
									githubLink={githubLink}
									featured={i === 0}
									index={i}
								/>
							)
						)
					)}
				</div>
			</section>
		</main>
	);
}

export default Projects;
