import React from 'react';

const GifGridItem = ({ title, url }) => {
  
  return (
    <div className="card animate__animated animate__rubberBand">
      <p>{ title }</p>
      <img src={ url } alt={ title }></img>     
    </div>
  )
}

export default GifGridItem;