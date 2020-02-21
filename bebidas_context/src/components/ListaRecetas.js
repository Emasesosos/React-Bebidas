import React, { useContext } from 'react';
import Receta from './Receta';
import recetaContext from '../context/recetas/recetaContext';

const ListaRecetas = () => {

    const recetasContext = useContext(recetaContext);
    const { recetas } = recetasContext;
    console.log(recetas);

    return (
        <div className="row mt-5">
            {
                recetas.map(receta => {
                    return(
                        <Receta
                            key={receta.idDrink}
                            receta={receta}
                        />
                    );
                })
            }
        </div>
    );
}

export default ListaRecetas;