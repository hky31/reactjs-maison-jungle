import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Category from "./Category";
import { useState } from "react";

// definition of the component with items grouped by category
// function ShoppingList({cart, updateCart}) {
// 	const categories_tmp = plantList.reduce((accumulator, item) => {
// 		const key = item["category"];
// 		if (!accumulator[key]) {
// 			accumulator[key] = [];
// 		}
// 		accumulator[key].push(item);
// 		return accumulator;
// 	}, {});

// 	const categories = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[]
// 	)

// 	function addToCart(name, price) {
// 		const currentPlantSaved = cart.find((plant) => plant.name === name)
// 		if (currentPlantSaved) {
// 			const cartFilteredCurrentPlant = cart.filter(
// 				(plant) => plant.name !== name
// 			)
// 			updateCart([
// 				...cartFilteredCurrentPlant,
// 				{ name, price, amount: currentPlantSaved.amount + 1 }
// 			])
// 		} else {
// 			updateCart([...cart, { name, price, amount: 1 }])
// 		}
// 	}

// 	return (
// 		<div> 
// 			<Category />
// 			{Object.entries(categories_tmp).map(([category, plantsInCategory]) => (
// 				<div key={category}>
// 					<h3 className="lmj-plant-category">{category.toUpperCase()}</h3>
// 					<ul className="lmj-plant-list">
// 						{/* {plantsInCategory.map((plant) => (
// 							<li key={plant.id} className="lmj-plant-item">
// 								{plant.name}
// 						{plant.isSpecialOffer && <div className="lmj-sales">SOLDE</div>}
// 							</li>
// 						))} */}

// 						{/* <div className='lmj-shopping-list'>
// 								<ul>
// 									{categories.map((cat) => (
// 										<li key={cat}>{cat}</li>
// 									))}
// 								</ul> */}

// 						{plantsInCategory.map(
// 							({ id, cover, name, water, light, color, size, isSpecialOffer, price }) => (
// 								<div key={id}>
// 									<PlantItem
// 										id={id}
// 										cover={cover}
// 										name={name}
// 										water={water}
// 										light={light}
// 										color={color}
// 										size={size}
// 										isSpecialOffer={isSpecialOffer}
// 									/>
// 									<button onClick={() => addToCart(name, price)}>Ajouter</button>
// 								</div>
// 							)
// 						)}
// 						{/* <button onClick={() => updateCart(cart + 1)}>Ajouter</button> */}
// 					</ul>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// function ShoppingList({cart, updateCart}) {
// 	const categories_tmp = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[]
// 	);

// 	return (
// 		<div>
// 			<ul>
// 				{categories_tmp.map((cat) => (
// 					<li key={cat}>{cat}</li>
// 				))}
// 			</ul>
// 			<ul className="lmj-plant-list">
// 				{plantList.map(({ id, cover, name, water, light }) => (
// 					<div>
// 						<PlantItem
// 						id={id}
// 						cover={cover}
// 						name={name}
// 						water={water}
// 						light={light}
// 					/>
// 						<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
// 					</div>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

function ShoppingList({ cart, updateCart }) {
	const categories_tmp = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    const [selectedCategory, setSelectedCategory] = useState('');

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
 			<Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
			{/* <ul>
				{categories_tmp.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul> */}
			{/* <p>[<i> Categorie sélectionné : {selectedCategory} </i>]</p> */}
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => (
					(selectedCategory === '' || selectedCategory === category) ?
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div> : null
				))}
			</ul>
		</div>
	)
}

export default ShoppingList;
