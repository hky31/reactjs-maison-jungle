import "../styles/Cart.css";
import { useState } from "react";

function Cart({cart, updateCart}) {
	// const priceMonstera = 8;
	// const priceLierre = 10;
	// const priceBouquet = 15;

	// const [current_cart, updateCart] = useState(0)
	// const [current_monstera, updateMonstera] = useState(0)
	// const [current_lierre, updateLierre] = useState(0)
	// const [current_bouquet, updateBouquet] = useState(0)
	// const resetCart = () => { updateMonstera(0);updateLierre(0);updateBouquet(0);}

	// const [isOpen, setIsOpen] = useState(false);
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	return (
		<div className='lmj-cart'>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								<i>[ {name.toUpperCase()} {price}€ ]</i> x {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	);

	// return (
	// 	!isOpen ? (
	// 	<button onClick={() => setIsOpen(true)}>
	// 		Ouvrir le panier
	// 	</button> ) : 
	// 	<div className="lmj-cart">
	// 	<button onClick={() => setIsOpen(false)}>
	// 		Fermer le panier
	// 	</button>
	// 		<h2>Votre panier :</h2>
	// 		<div>
	// 			MONSTERA : {priceMonstera} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateMonstera(current_monstera + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div>
	// 		<div>
	// 			FICUS LYRATA : {priceLierre} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateLierre(current_lierre + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div>
	// 		<div>
	// 			POTHOS ARGENTE : {priceLierre} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateLierre(current_lierre + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div>
	// 		<div>
	// 			YUCCA : {priceLierre} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateLierre(current_lierre + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div><br/><br/>
	// 		<div>
	// 			OLIVIER : {priceLierre} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateLierre(current_lierre + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div>
	// 		<div>
	// 			GERANIUM : {priceLierre} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateLierre(current_lierre + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div>
	// 		<div>
	// 			BASILIQUE : {priceLierre} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateLierre(current_lierre + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div>
	// 		<div><br/><br/>
	// 			ALOE : {priceLierre} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateLierre(current_lierre + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div>
	// 		<div>
	// 			SUCCULENTE : {priceLierre} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateLierre(current_lierre + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div><br/><br/>
	// 		<div>
	// 			Bouquet : {priceBouquet} euros &nbsp;&nbsp;
	// 			<button onClick={() => updateBouquet(current_bouquet + 1)}>
	// 				Ajouter
	// 			</button>
	// 		</div>
	// 		<h3>Total : {priceMonstera * current_monstera + priceLierre * current_lierre + priceBouquet * current_bouquet} euros</h3>
	// 			<button onClick={() => resetCart(0)}>
	// 				Vider
	// 			</button>
	// 	</div>
	// )
}

export default Cart;
