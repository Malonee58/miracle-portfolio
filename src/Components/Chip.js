import React from "react";

function Chip({ children, className = "" }) {
	return <span className={`chip ${className}`}>{children}</span>;
}

export default Chip;
