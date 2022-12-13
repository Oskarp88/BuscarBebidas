import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// Crear el context
export const CategoriaContex = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider =(props)=>{
    //crear el state del context
    const [categorias, setCategoria]=useState([]);
    //consultando a la api
    useEffect(()=>{
       const obtenerCategorias = async ()=>{
        
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const result = await axios(url);
            setCategoria(result.data.drinks)
        
       }
       obtenerCategorias();
    },[]);

    return(
        <CategoriaContex.Provider
           value={{
             categorias
           }}
        >
            {props.children}
        </CategoriaContex.Provider>
    )
}
export default CategoriasProvider;