import React from 'react';

import './board.css';



const Cuadro = ({turn, onClick}) => {
   return (<button id='boton' onClick={onClick}>{turn}</button>) 
}



export default Cuadro;





