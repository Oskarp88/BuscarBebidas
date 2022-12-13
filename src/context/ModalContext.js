import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const [ idreceta, guardarIdReceta] = useState(null);
    const [recetas, guardarReceta] = useState({});
    //consultar los detalles de la receta con la id en la api
   useEffect(()=>{
    const detallesReceta = async ()=>{
        if(!idreceta) return;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
        const data = await axios.get(url);
        guardarReceta(data.data.drinks[0]);
    }
    detallesReceta();
   })
    
    return (  
        <ModalContext.Provider
           value={{
              recetas,
              guardarIdReceta,
              guardarReceta
           }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;