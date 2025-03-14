import CustomTooltip from "./CustomTooltip";

function handleSizeInfo(flowerSize) {
	// console.log(" Click on : " + { plantName });
	// Cette plante requiert peu/modérement/beaucoup de lumière/d'arrosage
	switch (flowerSize) {
		case 1:case 2:
			alert("Cette plante est de petite taille");
			break;
        case 3:
            alert("Cette plante est de taille moyenne");
            break;
        case 4:case 5:
            alert("Cette plante est de grande taille");
            break;

		default:
			alert("Cette plante est de taille normale");
			break;
	}
	// alert("This is my event LIGHT");
}
function handleColorInfo(flowerColor) {
	// console.log(" Click on : " + { plantName });
	// Cette plante requiert peu/modérement/beaucoup de lumière/d'arrosage
	switch (flowerColor) {
		case 1:case 2:
			alert("Cette plante est de petite taille");
			break;
        case 3:
            alert("Cette plante est de taille moyenne");
            break;
        case 4:case 5:
            alert("Cette plante est de grande taille");
            break;

		default:
			alert("Cette plante est de taille normale");
			break;
	}
	// alert("This is my event LIGHT");
}

function FlowerDetail({flowerSize, flowerColor}) {

    const sizeTab = [1, 2, 3, 4, 5];
    let sizeIcon = "🟩";
    let color = "⚪️";

    switch (flowerColor) {
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
        //     <span onMouseOver={() => handleSizeInfo(flowerSize)}>Size : {sizeTab.map((sizeElem) => flowerSize >= sizeElem ? <span key={sizeElem.toString()}>{sizeIcon}</span> : null)} </span>
        // </div>
        <div>
            <span>Color : {color} </span><br />
            <span>Size : {sizeTab.map((sizeElem) => flowerSize >= sizeElem ? <span key={sizeElem.toString()}>{sizeIcon}</span> : null)} </span>
            {/* <CustomTooltip id="my-tooltip" place="top" content="hello world" /> */}
        </div>
        
    );
}

export default FlowerDetail;
