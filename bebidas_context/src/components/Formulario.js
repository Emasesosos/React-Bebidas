import React, { useContext, useState } from 'react';
import categoriaContext from '../context/categorias/categoriaContext';
import recetaContext from '../context/recetas/recetaContext';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        nombre: '', 
        categoria: ''
    })

    const categoriasContext = useContext(categoriaContext);
    const { categorias } = categoriasContext;
    // console.log(categorias);

    const recetasContext = useContext(recetaContext);
    const { buscarRecetas, guardarConsultar } = recetasContext;
    // console.log(buscarRecetas);

    // Función para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control" 
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        { 
                            categorias.map(categoria => {
                                    return(
                                        <option 
                                            key={categoria.strCategory}
                                            value={categoria.strCategory}
                                        >
                                            {categoria.strCategory}
                                        </option>
                                    );
                                }
                            )
                        }
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;