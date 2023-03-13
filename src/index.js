import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const contenido = (
<div>
  <h1>Titulo</h1>
  <div>Hola desde react</div>
  </div>
);

function Componente({ título, children}) {

  return ( 
    <div>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  );
}

   ReactDOM.render(
   <Componente titulo="Titulo 1"> Hola desde React</Componente>,
    document.getElementById('root')
    );

    
// Aquí le envie propiedades al componente- forma básica y sencilla en React