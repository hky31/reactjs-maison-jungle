import Banner from "./Banner";
import logo from "../assets/logo_leaf.png";
import Cart from './Cart'
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import '../styles/Layout.css'
import { useState } from "react";

// function App() {
// 	return (
// 		<div>
// 			<Banner />
// 			{/* <Cart /> */}
// 			<ShoppingList />
// 		</div>
// 	);
// }

function App() {
	const [cart, updateCart] = useState([])

	return (
		<div>
			<Banner>
				<img src={logo} alt="La maison jungle" className="lmj-logo" />
				<h1 className="lmj-title">La maison jungle</h1>
			</Banner>

			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	);
}

// import React from 'react';
// import CustomTooltip from "./CustomTooltip";


// function App() {
// 	return (
// 	  <>
// 		<div data-tooltip-id="my-tooltip">
// 		  place to be tooltiped
// 		</div>
// 		<CustomTooltip id="my-tooltip" place="top" content="hello world" />
// 	  </>
// 	)
//   }

export default App;
