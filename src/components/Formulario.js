import React, { useContext, useState } from 'react'
import { CategoriaContex } from '../context/CategoriaContex';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const {categorias} = useContext(CategoriaContex);
    const {buscarRecetas, setConsultar} = useContext(RecetasContext);
    const [busqueda, setBusqueda]=useState({
        nombre: '',
        categoria: ''
    });

    //funcion para leer los contenidos
    const obtenerDatosRecetas = (e)=>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    return ( 
        <form 
           className='col-12'
           onSubmit={(e)=>{
            e.preventDefault();
            buscarRecetas(busqueda)
            setConsultar(true)
           }}
        >
            <fieldset className='text-center'>
               <legend>Buscar bebidas por Categoria o Ingredientes</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                       name='nombre'
                       className='form-control'
                       type='text'
                       placeholder='Buscar por Ingrediente'
                       onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                       className='form-control'
                       name='categoria'
                       onChange={obtenerDatosRecetas}
                    >
                       <option value=''>--Selecciona Categoria--</option>
                       {categorias.map(categoria=>(
                        <option
                           key={categoria.strCategory}
                           value={categoria.strCategory}
                        >{categoria.strCategory}</option>
                       ))}
                    </select>

                </div>
                <div className='col-md-4'>
                   <input 
                      type='submit'
                      className='btn btn-block btn-primary'
                      value='Buscar Bebidas'
                   />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;