import React, { useReducer } from 'react';
import categoriaContext from './categoriaContext';
import categoriaReducer from './categoriaReducer';

const CategoriaState = (props) => {

    const initialState = {
        
    }

    const [state, dispatch] = useReducer(categoriaReducer, initialState);

    return (
        <categoriaContext.Provider
            value={{

            }}
        >
            {props.children}
        </categoriaContext.Provider>
    );
};
 
export default CategoriaState;

