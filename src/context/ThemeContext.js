import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const getInitialTheme = () => {
		if (typeof window === "undefined") return "light";
		const stored = window.localStorage.getItem("theme");
		if (stored === "light" || stored === "dark") return stored;
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	};

	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(theme === "dark" ? "light" : "dark");
		root.classList.add(theme);
		window.localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
