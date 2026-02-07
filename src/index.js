import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <-- add this
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HashRouter>
		<App />
	</HashRouter>,
);
