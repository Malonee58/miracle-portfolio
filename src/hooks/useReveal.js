import { useEffect, useRef } from "react";

/**
 * Adds a "reveal-visible" class once the element scrolls into view.
 * Pair with the .reveal utility class for a fade + rise entrance.
 */
export default function useReveal(options = {}) {
	const ref = useRef(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (prefersReducedMotion) {
			node.classList.add("reveal-visible");
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					node.classList.add("reveal-visible");
					observer.unobserve(node);
				}
			},
			{ threshold: 0.15, ...options }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [options]);

	return ref;
}
