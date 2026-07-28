import React, { useEffect, useState } from "react";

function ScrollProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div
			className="fixed top-0 left-0 h-[3px] z-[60] bg-gradient origin-left transition-transform duration-150 ease-out w-full"
			style={{ transform: `scaleX(${progress / 100})` }}
			aria-hidden="true"
		/>
	);
}

export default ScrollProgress;
