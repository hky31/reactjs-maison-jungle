import { plantList } from "../datas/plantList";
import React, { useState } from "react";

function Category({currentCategory, setSelectedCategory}) {
    const categories_tmp = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    const [categories, setCategories] = useState(categories_tmp);
  
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    
    // const [casesCochees, setCasesCochees] = useState(categories_tmp.map(() =>false));
    // const handleChangeCase = (index) => {
    //     // setEstCoche(event.target.checked);
    //     // setSelectedCategory(event.target.value);
    //     const nouvelleCasesCochees = [...casesCochees];
    //     nouvelleCasesCochees[index] = !nouvelleCasesCochees[index];
    //     setCasesCochees(nouvelleCasesCochees);
    // };

    const [casesCochees, setCasesCochees] = useState(
        categories_tmp.reduce((acc, element) => {
          acc[element.id] = false;
          return acc;
        }, {})
      );
    const handleChange_aux = (id) => {
        const nouvelleCasesCochees = {
          ...casesCochees,
          [id]: !casesCochees[id],
        };
        setCasesCochees(nouvelleCasesCochees);
      };
  
    return (
      <div> <br />
        <span>Choisissez une categorie de plantes : &nbsp;&nbsp;</span>
        <select value={currentCategory} onChange={handleChange}>
          <option value=""> -- Sélectionnez une catégorie -- </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
        {/* <p>[<i> Élément sélectionné : {currentCategory} </i>]</p> */}
        {/* <br /><br />
        <div>
            {categories.map((category, index) => (            
                <label key={category.id}>
                     <input
                    type="checkbox"
                    checked={casesCochees[index]}
                    onChange={() => handleChangeCase(index)}
                    name={category}
                    /> 
                    <input
                        type="checkbox"
                        name={category}
                        checked={casesCochees[category.id]}
                        onChange={() => handleChange_aux(category.id)}
                    />
                    {category.toUpperCase()}&nbsp;&nbsp;&nbsp;
                </label> 
            ))}
        </div> */}
      </div>
    );
}

export default Category;