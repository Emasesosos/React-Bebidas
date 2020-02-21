import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';
import CategoriaState from './context/categorias/categoriaState';
import RecetaState from './context/recetas/recetaState';

function App() {
  return (
    <CategoriaState>
      <RecetaState>
        <Header/>
        <div className="container mt-5">
          <div className="row">
            <Formulario/>
          </div>
          <ListaRecetas/>
        </div>
      </RecetaState>
    </CategoriaState> 
  );
}

export default App;
