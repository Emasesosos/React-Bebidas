import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasState from './context/categorias/categoriaState';

function App() {
  return (
    <CategoriasState>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <Formulario/>
        </div>
      </div>
    </CategoriasState>
  );
}

export default App;
