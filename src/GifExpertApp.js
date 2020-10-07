import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  // const no se deben mutar, cómo react sabe que hubo un cambio y hay que renderizar otra vez?, un arr no sirve
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['']);
  // Warning: Each child in a list should have a unique "key" prop.
  // category vs index

  /* const handleAdd = () => {
    // setCategories( [...categories, 'Ranma 1/2'] );
    // setCategories( ['Ranma 1/2',...categories] );
    setCategories(cats => [...cats, 'Ranma 1/2'])
  } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      {/* <button onClick= { handleAdd }>Agregar</button> */}
      <ol>
          { 
            categories.map( category => 
              <GifGrid 
                category={ category }
                key={ category }
              />
            )
          }
      </ol>
    </>
  )
}

export default GifExpertApp;