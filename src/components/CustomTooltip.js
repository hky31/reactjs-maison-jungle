import React, { useState } from 'react';

/**2. Création d'un tooltip personnalisé**

Si vous ne souhaitez pas utiliser de bibliothèque de composants, vous pouvez créer votre propre tooltip personnalisé. Voici une approche simple :

* Utilisez le hook `useState` pour gérer l'état d'affichage du tooltip.
* Utilisez les gestionnaires d'événements `onMouseEnter` et `onMouseLeave` pour afficher et masquer le tooltip.
* Utilisez des styles CSS pour positionner et styliser le tooltip.

import Tooltip from '@mui/material/Tooltip';

function MonComposant() {
    return (
    <Tooltip title="Ceci est un tooltip MUI">
        <button>Survolez-moi</button>
    </Tooltip>
    );
}
```

* **Ant Design (AntD) :**
* AntD propose également un composant `Tooltip` avec des options de style et de positionnement flexibles.
* Installation : `npm install antd`.
* Utilisation :

```jsx
import { Tooltip } from 'antd';

function MonComposant() {
    return (
    <Tooltip title="Ceci est un tooltip AntD">
        <button>Survolez-moi</button>
    </Tooltip>
    );
}

* **React-Tooltip :**
    * Cette bibliothèque est spécialement conçue pour les tooltips et offre une grande flexibilité.
    * Installation : `npm install react-tooltip`.
    * Utilisation :

```jsx
    import ReactTooltip from 'react-tooltip';

    function MonComposant() {
      return (
        <div>
          <button data-tip="Ceci est un tooltip React-Tooltip">Survolez-moi</button>
          <ReactTooltip />
        </div>
      );
    }
    ```
    
*/


// function CustomTooltip() {
//     const [afficherTooltip, setAfficherTooltip] = useState(false);

//     return (
//     <div style={{ position: 'relative', display: 'inline-block' }}>
//         <button
//         onMouseEnter={() => setAfficherTooltip(true)}
//         onMouseLeave={() => setAfficherTooltip(false)}
//         >
//         Survolez-moi
//         </button>
//         {afficherTooltip && (
//         <div
//             style={{
//             position: 'absolute',
//             backgroundColor: 'rgba(0, 0, 0, 0.8)',
//             color: 'white',
//             padding: '8px',
//             borderRadius: '4px',
//             zIndex: 1,
//             bottom: '100%',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             }}
//         >
//             Ceci est un tooltip personnalisé
//         </div>
//         )}
//     </div>
//     );
// }

import { Tooltip } from 'react-tooltip';

    function CustomTooltip() {
        return (
            <div>
              <div data-tooltip-id="mon-tooltip">Survolez-moi</div>
              <Tooltip id="mon-tooltip" place="top" content="Ceci est un tooltip" />
            </div>
          );
    }

export default CustomTooltip;