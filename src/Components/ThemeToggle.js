import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ className = "" }) {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
			aria-pressed={isDark}
			className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border-soft bg-card text-heading transition-colors duration-300 hover:border-indigo-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-accent ${className}`}
		>
			<svg
				className={`w-[18px] h-[18px] transition-all duration-300 ${
					isDark ? "opacity-0 scale-50 absolute" : "opacity-100 scale-100"
				}`}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
				<path
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
					d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
				/>
			</svg>
			<svg
				className={`w-[18px] h-[18px] transition-all duration-300 ${
					isDark ? "opacity-100 scale-100" : "opacity-0 scale-50 absolute"
				}`}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="currentColor"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z"
				/>
			</svg>
		</button>
	);
}

export default ThemeToggle;
