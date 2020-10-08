import React from 'react'

const GifGridItem = ({ title, url }) => {
  
  return (
    <div className="card">
      <p>{ title }</p>
      <img src={ url } alt={ title }></img>     
    </div>
  )
}

export default GifGridItem;