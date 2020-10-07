import React, { useEffect } from 'react';

const GifGrid = ({ category }) => {

  // useState it is not convienient because each time react detects a change it will rerender so reretrieve the data, that is make the petition over and over
  // that's why we use useEffect(), that executes code conditionally 

  //(callback , arreglo de dependencias)
  useEffect(() => {
    getGifs();
  }, [])


  const getGifs = async() => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=cat&limit=10&api_key=9LfBNSlZUPaiGzvZGZwZVIAEIoxJvANu';
    const resp = await fetch(url);
    const { data } = await resp.json();

    // console.log(data);
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    })
    // console.log(gifs);
  }

  return (
    <div>
      <h3>{ category }</h3>
    </div>
  )
}

export default GifGrid;