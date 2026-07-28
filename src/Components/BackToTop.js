import React, { useEffect, useState } from "react";

function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 480);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () =>
		window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<button
			type="button"
			onClick={scrollToTop}
			aria-label="Back to top"
			className={`fixed bottom-6 right-5 md:right-8 z-50 w-11 h-11 rounded-full glass shadow-soft dark:shadow-soft-dark flex items-center justify-center text-heading transition-all duration-300 ease-premium hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-accent ${
				visible
					? "opacity-100 translate-y-0 pointer-events-auto"
					: "opacity-0 translate-y-4 pointer-events-none"
			}`}
		>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path
					d="M8 13V3M8 3L3 8M8 3l5 5"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
}

export default BackToTop;
