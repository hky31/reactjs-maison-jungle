// declaration avec destructuration du composant CareScale
// afin de passer directement ses proprietes en variable de fonction

function handleClickLight(scaleValue) {
	// console.log(" Click on : " + { plantName });
	// Cette plante requiert peu/modérement/beaucoup de lumière/d'arrosage
	switch (scaleValue) {
		case 1:
			alert("Cette plante requiert peu de lumière");
			break;
		case 2:
			alert("Cette plante requiert modérement de lumière");
			break;
		case 3:
			alert("Cette plante requiert beaucoup de lumière");
			break;

		default:
			alert("Cette plante requiert peu de lumière");
			break;
	}
	// alert("This is my event LIGHT");
}

function handleClickWater(scaleValue) {
	// console.log(" Click on : " + { plantName });
	// Cette plante requiert peu/modérement/beaucoup de lumière/d'arrosage
	switch (scaleValue) {
		case 1:
			alert("Cette plante requiert peu d'arrosage");
			break;
		case 2:
			alert("Cette plante requiert modérement d'arrosage");
			break;
		case 3:
			alert("Cette plante requiert beaucoup d'arrosage");
			break;

		default:
			alert("Cette plante requiert peu d'arrosage");
			break;
	}
	// alert("This is my event WATER");
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3];

	const scaleType = careType === "light" ? "☀️" : "💧";
	const scaleName = careType === "light" ? "Light" : "Water";

	return (
		// <div
		// 	onMouseOver={() =>
		// 		careType === "light"
		// 			? handleClickLight(scaleValue)
		// 			: handleClickWater(scaleValue)
		// 	}>
		<div>
			{scaleName} : {range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	);
	/** autre maniere de faire avec des constantes */
	// const quantityLabel = {
	// 	1: "peu",
	// 	2: "modérément",
	// 	3: "beaucoup",
	// };
	// return (
	// 	<div
	// 		onClick={() =>
	// 			alert(
	// 				`Cette plante requiert ${quantityLabel[scaleValue]} ${
	// 					careType === "light" ? "de lumière" : "d'arrosage"
	// 				}`
	// 			)
	// 		}>
	// 		{range.map((rangeElem) =>
	// 			scaleValue >= rangeElem ? (
	// 				<span key={rangeElem.toString()}>{scaleType}</span>
	// 			) : null
	// 		)}
	// 	</div>
	// );
}

export default CareScale;
