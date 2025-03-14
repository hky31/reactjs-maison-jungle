import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
	const [inputValue, setInputValue] = useState("");

	function handleChange(e) {
		setInputValue(e.target.value);
	}

	function checkEmailFormat() {
		if (inputValue.length > 0) {
			if (!inputValue.includes("@")) {
				alert(
					" Attention, il n'y a pas d'@, ceci n'est pas une adresse valide. "
				);
			}
		}
	}

	return (
		<footer className="lmj-footer">
			<div className="lmj-footer-elem">
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className="lmj-footer-elem">
				Laissez-nous votre mail : &nbsp;
				{/* <textarea
					placeholder="Entrez votre mail"
					value={inputValue}
					onChange={handleChange}
					onBlur={checkEmailFormat}
				/> */}
				<input type="text"
					placeholder="Entrez votre mail"
					value={inputValue}
					onChange={handleChange}
					onBlur={checkEmailFormat}
				/>
			</div>
		</footer>
	);
}

export default Footer;
