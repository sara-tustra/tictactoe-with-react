import React from 'react';

import './board.css';


// componente Cuadro
    //valor (prop)
    //funcion OnClick (prop)

const Cuadro = (props) => {
   return (<button id='boton' onClick={props.onClick}>{props.value} </button>) 
}



export default Cuadro;



