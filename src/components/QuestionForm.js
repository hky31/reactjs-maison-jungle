import { useState } from "react";

function QuestionForm() {
	const [inputValue, setInputValue] = useState("Posez votre question ici");
	const isInputError = inputValue.length > 30;
	return (
		<div>
			<textarea
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				// onChange={(e) =>
				// 	e.target.value.length < 30
				// 		? setInputValue(e.target.value)
				// 		: alert("input Value too long")
				// }
			/>
			<button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
		</div>
	);
}

export default QuestionForm;
