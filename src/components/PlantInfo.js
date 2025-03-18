import { Tooltip } from 'react-tooltip';

function handleTooltipLight(scaleValue) {
	switch (scaleValue) {
		case 1:
			return("Cette plante requiert peu de lumière");
		case 2:
			return("Cette plante requiert modérement de lumière");
		case 3:
			return("Cette plante requiert beaucoup de lumière");
		default:
			return("Cette plante requiert peu de lumière");
	}
}
function handleTooltipWater(scaleValue) {
	switch (scaleValue) {
		case 1:
			return("Cette plante requiert peu d'arrosage");
		case 2:
			return("Cette plante requiert modérement d'arrosage");
		case 3:
			return("Cette plante requiert beaucoup d'arrosage");
		default:
			return("Cette plante requiert peu d'arrosage");
	}
}
function handleSizeInfo(flowerSize) {
	switch (flowerSize) {
		case 1:case 2:
			return("Cette plante est de petite taille");
        case 3:
            return("Cette plante est de taille moyenne");
        case 4:case 5:
            return("Cette plante est de grande taille");
		default:
			return("Cette plante est de taille normale");
	}
}

function PlantInfo({waterScale, lightInfo, plantSize, plantColor}) {
    const range = [1, 2, 3];
	const scaleWater = "💧";
	const scaleLight = "☀️";
    const sizeTab = [1, 2, 3, 4, 5];
    const sizeIcon = "🟩";

    let color = "⚪️";
    switch (plantColor) {
        case 'red':
            color = '🔴';
            break;
        case 'blue':
            color = '🔵';
            break;
        case 'yellow':
            color = '🟡';
            break;    
        default:
            break;
    }

    return (
        // <div>
        //     <span onMouseOver={() => handleColorInfo(color)}>Color : {color} </span><br />
        //     <span onMouseOver={() => handleSizeInfo(flowerSize)}>Size : {sizeTab.map((sizeElem) => plantSize >= sizeElem ? <span key={sizeElem.toString()}>{sizeIcon}</span> : null)} </span>
        // </div>
        // <div>            
        //     <div>
        //         <div >Water : {range.map((rangeElem) =>
        //             waterScale >= rangeElem ? (
        //                 <span key={rangeElem.toString()}>{scaleWater}</span>
        //             ) : null
        //         )}                    
        //         </div>
        //         <div data-tooltip-id="mon-tooltip-water">
        //             <Tooltip id="mon-tooltip-water" place="top" content={handleTooltipWater(waterScale)} />
        //         </div>
        //     </div>
        //     <div>
        //         <div>Light : {range.map((rangeElem) =>
        //             lightInfo >= rangeElem ? (
        //                 <span key={rangeElem.toString()}>{scaleLight}</span>
        //             ) : null
        //         )}
        //         </div>
        //         <div data-tooltip-id="mon-tooltip-light">
        //             <Tooltip id="mon-tooltip-light" place="top" content={handleTooltipLight(lightInfo)} />
        //         </div>
        //     </div>
        //     <span>Color : {color} </span><br />
        //     <div>
        //         <div>Size : {sizeTab.map((sizeElem) => plantSize >= sizeElem ? <span key={sizeElem.toString()}>{sizeIcon}</span> : null)} 
        //         </div>
        //         <div data-tooltip-id="mon-tooltip-size">
        //             <Tooltip id="mon-tooltip-size" place="top" content={handleSizeInfo(plantSize)} />
        //         </div>
        //     </div>
		// </div>
        ///////////////////////////////////////////////////////////////////////////////////
        // <div>            
		// 	<div data-tooltip-id="mon-tooltip-water">Water : {range.map((rangeElem) =>
		// 		waterScale >= rangeElem ? (
		// 			<span key={rangeElem.toString()}>{scaleWater}</span>
		// 		) : null
		// 	)}
        //         <Tooltip id="mon-tooltip-water" place="top" content={handleTooltipWater(waterScale)} />
        //     </div>

        //     <div data-tooltip-id="mon-tooltip-light">Light : {range.map((rangeElem) =>
		// 		lightInfo >= rangeElem ? (
		// 			<span key={rangeElem.toString()}>{scaleLight}</span>
		// 		) : null
		// 	)}
        //         <Tooltip id="mon-tooltip-light" place="top" content={handleTooltipLight(lightInfo)} />
        //     </div>

        //     <span>Color : {color} </span><br />

        //     <div data-tooltip-id="mon-tooltip-size">Size : {sizeTab.map((sizeElem) => plantSize >= sizeElem ? <span key={sizeElem.toString()}>{sizeIcon}</span> : null)} 
        //       <Tooltip id="mon-tooltip-size" place="top" content={handleSizeInfo(plantSize)} />
        //     </div>            
		// </div>
        ///////////////////////////////////////////////////////////////////////////////////
        
        <div>            
			<div data-tooltip-id="mon-tooltip-water">Water : {range.map((rangeElem) =>
				waterScale >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleWater}</span>
				) : null
			)}
            </div>

            <div data-tooltip-id="mon-tooltip-light">Light : {range.map((rangeElem) =>
				lightInfo >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleLight}</span>
				) : null
			)}
            </div>         
		</div>
    );
}

export default PlantInfo;