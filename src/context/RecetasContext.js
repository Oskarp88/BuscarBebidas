import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const[recetas, guardarRecetas] = useState([]);
    const[buscar,buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });
    const [consultar, setConsultar] = useState(false);
    const {nombre,categoria} = buscar;
    
    useEffect(()=>{
      
        if(consultar){
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const result = await axios.get(url);
                guardarRecetas(result.data.drinks)
            }
            obtenerRecetas();
        }
        
    })

    return ( 
        <RecetasContext.Provider
           value={{
               recetas,
               buscarRecetas,
               setConsultar
               
           }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;