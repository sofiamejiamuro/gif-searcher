import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  // const no se deben mutar, cómo react sabe que hubo un cambio y hay que renderizar otra vez?, un arr no sirve, ñor eso susamos useState
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [ categories, setCategories ] = useState(['One Punch Man']);
  // console.log(setCategories)
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
      {/* Estoy pasando como prop toda la función para poder ocuparla en el componente */}
      <AddCategory setCategories={ setCategories }/>
      <hr />
      <ol>
        {
          categories.map( category  => (
            <GifGrid 
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;