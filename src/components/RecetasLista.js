import React, { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContext';
import Recetas from './Recetas';

const RecetasLista = () => {
    //extraer las recetas
    const {recetas} = useContext(RecetasContext);
    return ( 
        <div className='row mt-5'>
            {recetas.map(receta => (
                <Recetas
                   key={receta.idDrink}
                   receta={receta}
                />
            ))}
        </div>
     );
}
 
export default RecetasLista;