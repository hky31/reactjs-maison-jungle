import logo from "../assets/logo_leaf.png";
import "../styles/Banner.css";

// function Banner_old() {
// 	const title = "La maison jungle";
// 	return (
// 		<div className="lmj-banner">
// 			<img src={logo} alt="La maison jungle" className="lmj-logo" />
// 			<h1 className="lmj-title">{title}</h1>
// 		</div>
// 	);
// }

function Banner({ children }) {
	return <div className="lmj-banner">{children}</div>;
}

export default Banner;
