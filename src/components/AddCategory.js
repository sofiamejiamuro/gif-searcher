import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

  // useState() si dejamos sin argumenttos el metodo es undefined, entonces inputValue es undefined
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setinputValue(e.target.value)
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log('Submit hecho');
    if( inputValue.trim().length > 1 ){
       // Con esta callback accedemos a las cats sin necesidad de que pasen como props
      setCategories(cats => [...cats, inputValue ])
      setinputValue('')
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