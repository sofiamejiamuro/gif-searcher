import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

  // useState() si dejamos sin argumenttos el metodo es undefined, entonces inputValue es undefined
  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value)
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    //console.log('Submit hecho');
    if( inputValue.trim().length > 1 ){
       // Con esta callback accedemos a las cats sin necesidad de que pasen como props vs setCategories( ['Ranma 1/2',...categories] );
      setCategories(cats => [ inputValue, ...cats ])
      setInputValue('')
    }
  };

  return (
    <form onSubmit={ hanldeSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      ></input>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;