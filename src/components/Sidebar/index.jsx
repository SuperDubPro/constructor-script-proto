import "./styles.css"

export default function Sidebar({ children }) {
	return (
		<div className="Sidebar">
			<div className="header">Data-Area Proto</div>
			{children}
		</div>
	);
}