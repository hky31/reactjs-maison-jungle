import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";

// definition of the component with items grouped by category
function ShoppingList() {
	const categories = plantList.reduce((accumulator, item) => {
		const key = item["category"];
		if (!accumulator[key]) {
			accumulator[key] = [];
		}
		accumulator[key].push(item);
		return accumulator;
	}, {});

	return (
		<div>
			{Object.entries(categories).map(([category, plantsInCategory]) => (
				<div key={category}>
					<h3 className="lmj-plant-category">{category.toUpperCase()}</h3>
					<ul className="lmj-plant-list">
						{/* {plantsInCategory.map((plant) => (
							<li key={plant.id} className="lmj-plant-item">
								{plant.name}
						{plant.isSpecialOffer && <div className="lmj-sales">SOLDE</div>}
							</li>
						))} */}

						{plantsInCategory.map(
							({ id, cover, name, water, light, color, size, isSpecialOffer }) => (
								<PlantItem
									id={id}
									cover={cover}
									name={name}
									water={water}
									light={light}
									color={color}
									size={size}
									isSpecialOffer={isSpecialOffer}
								/>
							)
						)}
					</ul>
				</div>
			))}
		</div>
	);
}

// function ShoppingList() {
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
// 				{plantList.map(({ id, cover, name, water, light }) => (
// 					<PlantItem
// 						id={id}
// 						cover={cover}
// 						name={name}
// 						water={water}
// 						light={light}
// 					/>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

export default ShoppingList;
