import React, { useState, useEffect } from 'react';
import recetaContext from './recetaContext';
import axios from 'axios';

const RecetaState = (props) => {

    const [recetas, guardarRecetas] = useState([]);

    const [busqueda, buscarRecetas] = useState({ // Crear el state del Context
        nombre: '',
        categoria: ''
    }); 

    const [consultar, guardarConsultar] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect(() => { // Ejecutar el llamado a la API

        if(consultar) {

            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                // console.log(url);
                const resultado = await axios.get(url);
                // console.log(resultado);
                guardarRecetas(resultado.data.drinks);
            }

            obtenerRecetas();

        }
        
    }, [busqueda]);

    return (
        <recetaContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </recetaContext.Provider>
    );
};

export default RecetaState;

