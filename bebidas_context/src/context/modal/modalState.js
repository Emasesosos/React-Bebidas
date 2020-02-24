import React, { useState, useEffect } from 'react';
import modalContext from './modalContext';
import axios from 'axios';

const ModalState = (props) => {

    const [ idreceta, guardarIdReceta ] = useState(null); // Crear el state del Context
    const [ informacion, guardarReceta] = useState({});

    useEffect(() => { // Ejecutar el llamado a la API una vez que tengamos el Id de la receta
        const obtenerReceta = async () => {
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios.get(url);
            console.log(resultado);
            console.log(resultado.data.drinks[0]);
            guardarReceta(resultado.data.drinks[0]);
        }   
        obtenerReceta();
    }, [idreceta]);

    return (
        <modalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </modalContext.Provider>
    );
};

export default ModalState;

