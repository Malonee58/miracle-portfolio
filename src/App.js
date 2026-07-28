import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollProgress from "./Components/ScrollProgress";
import BackToTop from "./Components/BackToTop";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>
				<ScrollProgress />
				<ScrollToTop />
				<div className="min-h-screen bg-page transition-colors duration-300">
					<Header />
					<div id="main-content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/technologies" element={<Technologies />} />
						</Routes>
					</div>
					<Footer />
					<BackToTop />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
