import React from 'react';
import '../assets/styles/components/Categoria.css'

const Categoria = ({children, title}) =>{
    return(
      <div className="categories">  
        <h2 className="categories__title">{title}</h2>
        {children}
      </div>
    )
}

export default Categoria;