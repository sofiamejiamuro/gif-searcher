import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';
// import getGifs from '../helpers/getGifs'

const GifGrid = ({ category }) => {

  const { data:images , loading } = useFetchGifs(category);
  console.log('dataengifgrid',images); // Un Arry que contiene un Array de Objetos


  // Donde category es un item string del array, ya paso por map 
  // const [ gifs, setGifs ] = useState([])

  // useState it is not convienient because each time react detects a change it will rerender so reretrieve the data, that is make the petition over and over, e.g. counter
  // that's why we use useEffect(), that executes code conditionally 

  /* //(callback , arreglo de dependencias)
  useEffect(() => {
    // es una promesa
    getGifs(category)
    // gifs es un array de objetos
    .then( gifs => setGifs(gifs))
  }, [ category ]) */

  /* 
  Two different ways to write a map, depending on the explicit or implicit return 
  {
    images.map(img => {
      return <li 
        key={ img.id }
      >
        <p>{ img.title }</p>
        <img src={ img.url }></img>
      </li>
    })
  }
  {
    images.map(img => (
      <li 
        key={ img.id }
      >
        <p>{ img.title }</p>
        <img src={ img.url }></img>
      </li>
    ))
  } */

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
      {
        // console.log('images',images) // 
        images.map((img) => (
          <GifGridItem 
            key={ img.id }
            { ...img }
          />
        ))
      }
      </div>
    </>
  )
}

export default GifGrid;