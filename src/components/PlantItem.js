import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import FlowerDetail from "./FlowerDetail";
import PlantInfo from "./PlantInfo";

function handleClickPlant(plantName) {
	// console.log(" Click on : " + { plantName });
	alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

function handleClick(e) {
	// console.log(" Click on : " + { plantName });
	alert(`This is my event : `, e);
}

// declaration avec destructuration du composant CareScale
// afin de passer directement ses proprietes en variable de fonction
function PlantItem({ id, cover, name, water, light, color, size, isSpecialOffer }) {
	return (
		<li key={id} className="lmj-plant-item">
			<img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
			{name.toUpperCase()}
			{/* <div>
				<CareScale careType="water" scaleValue={water} />
				<CareScale careType="light" scaleValue={light} />
			</div>
			<div>
				<FlowerDetail flowerSize={size} flowerColor={color} />
			</div> */}
			{/* {isSpecialOffer && <div className="lmj-sales">SOLDE</div>} */}
			<div>
				<PlantInfo waterScale={water} lightInfo={light} plantSize={size} plantColor={color} />
			</div>
		</li>
	);
}

export default PlantItem;
