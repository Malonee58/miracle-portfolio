import React from "react";

/**
 * Consistent section heading: mono "eyebrow" label + large display title.
 */
function SectionHeading({ eyebrow, title, description, align = "left" }) {
	return (
		<div className={align === "center" ? "text-center" : "text-left"}>
			{eyebrow && <span className="eyebrow">{eyebrow}</span>}
			<h1 className="text-3xl text-heading md:text-5xl xl:text-5xl xl:leading-tight font-display font-bold">
				{title}
			</h1>
			{description && (
				<p
					className={`text-body pt-5 leading-relaxed ${
						align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
					}`}
				>
					{description}
				</p>
			)}
		</div>
	);
}

export default SectionHeading;
