import React, { useState, useEffect, useReducer } from 'react';
import categoriaContext from './categoriaContext';
import categoriaReducer from './categoriaReducer';
import axios from 'axios';

const CategoriaState = (props) => {

    // const initialState = {}

    // const [state, dispatch] = useReducer(categoriaReducer, initialState);

    const [categorias, guardarCategorias] = useState([]); // Crear el state del Context

    useEffect(() => { // Ejecutar el llamado a la API
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios.get(url);
            console.log(categorias);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, [])

    return (
        <categoriaContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </categoriaContext.Provider>
    );
};
 
export default CategoriaState;

