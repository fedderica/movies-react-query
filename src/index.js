import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const contenido = (
<div>
  <h1>Titulo</h1>
  <div>Hola desde react</div>
  </div>
);

function Componente(props) {
  console.log(props);
  return ( 
    <div>
      <h1>{props.titulo}</h1>
      <div>Hola desde React</div>
    </div>
  );
}
   ReactDOM.render(
   <Componente titulo="Titulo" contenido="hola desde react" />,
    document.getElementById('root')
    );

// Aquí le envie propiedades al componente- forma básica y sencilla en React