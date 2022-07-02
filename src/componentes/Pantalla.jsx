import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

const Pantalla = (props) => {
  const { input } = props;

  return (
    <div className='input'>
      {input}
    </div>
  )
}

export default Pantalla;