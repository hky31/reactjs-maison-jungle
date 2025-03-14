// import "../styles/ShoppingList.css";
// import { plantList } from "../datas/plantList";

// const plantList_aux = [
// 	"monstera",
// 	"ficus lyrata",
// 	"pothos argenté",
// 	"yucca",
// 	"palmier",
// ];

// function ShoppingList_aux() {
// 	return (
// 		<div className="lmj-shoppinglist">
// 			<h4>Shopping list</h4>
// 			<ul>
// 				{plantList_aux.map((plant, index) => (
// 					<li key={`${plant}-${index}`}>{plant}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// function ShoppingList_res() {
// 	const categories = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[]
// 	);

// 	return (
// 		<div>
// 			<ul>
// 				{categories.map((cat) => (
// 					<li key={cat}>{cat}</li>
// 				))}
// 			</ul>
// 			<ul>
// 				{plantList.map((plant) => (
// 					<li key={plant.id}>{plant.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// function ShoppingList_tmp() {
// 	// liste toutes de categories uniques
// 	const categories = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[]
// 	);

// 	return (
// 		<div>
// 			<p>group by</p>
// 			<ul>
// 				{categories.map((cat) =>
// 					plantList.map((plant) => (
// 						<li key={plant.id}>{plant.category == cat ? plant.name : null}</li>
// 						// {(plant.category === cat) ? <li key={plant.id}>{plant.name}</li> : null}
// 					))
// 				)}
// 			</ul>
// 			<p>separated</p>
// 			<ul>
// 				{categories.map((cat) => (
// 					<li key={cat}>{cat}</li>
// 				))}
// 			</ul>
// 			<ul>
// 				{plantList.map((plant) => (
// 					<li key={plant.id}>
// 						{plant.name} &nbsp;&nbsp;
// 						{/* {plant.isBestSale ? <span>⭐️</span> : null} */}
// 						{plant.isBestSale && <span>⭐️</span>}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// function ShoppingList() {
// 	return (
// 		<div>
// 			<GroupedList items={plantList} groupBy="category" />
// 		</div>
// 	);
// }

// function ShoppingList() {
// 	const categories = plantList.reduce((accumulator, item) => {
// 		const key = item["category"];
// 		if (!accumulator[key]) {
// 			accumulator[key] = [];
// 		}
// 		accumulator[key].push(item);
// 		return accumulator;
// 	}, {});

// 	return (
// 		<div>
// 			{Object.entries(categories).map(([category, plantsInCategory]) => (
// 				<div key={category}>
// 					<h3 className="lmj-plant-category">{category.toUpperCase()}</h3>
// 					<ul className="lmj-plant-list">
// 						{plantsInCategory.map((plant) => (
// 							<li key={plant.id} className="lmj-plant-item">
// 								{plant.name}
//						{plant.isSpecialOffer && <div className="lmj-sales">SOLDE</div>}
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// function ShoppingList_old() {
// 	const categories = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[]
// 	);

// 	return (
// 		<div>
// 			<ul>
// 				{categories.map((cat) => (
// 					<li key={cat}>{cat}</li>
// 				))}
// 			</ul>
// 			<ul className="lmj-plant-list">
// 				{plantList.map((plant) => (
// 					<li key={plant.id} className="lmj-plant-item">
// 						{plant.name}
// 						{plant.isSpecialOffer && <div className="lmj-sales">SOLDE</div>}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

/*

// declaration avec passage du composant en parametre directement
function CareScale(props) {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
        </div>
    )
}

Use case example : declaration du composant CareScale avec 2 valeurs differentes de la propriete careType
<CareScale careType='water' scaleValue={plant.water} />
<CareScale careType='light' scaleValue={plant.light} />

 */

// function handleSubmit(e) {
// 	e.preventDefault();
// 	alert(e.target["my_input"].value);
// }

// function App() {
// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<input type="text" name="my_input" defaultValue="Tapez votre texte" />
// 				<button type="submit">Entrer</button>
// 			</form>
// 			<Banner>
// 				<img src={logo} alt="La maison jungle" className="lmj-logo" />
// 				<h1 className="lmj-title">La maison jungle</h1>
// 			</Banner>
// 			{/* <Cart /> */}
// 			<ShoppingList />
// 			<QuestionForm />
// 		</div>
// 	);
// }
