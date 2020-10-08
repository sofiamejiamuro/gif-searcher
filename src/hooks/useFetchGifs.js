// Custom Hooks 
import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = ( category ) => {
  
  const [ state, setState ] = useState({
    data: [],
    loading: true
  });
 
  //(callback , arreglo de dependencias)
  // use effect can not be async esperan algo sincornop
  useEffect(() => {
    // Es una promesa
    getGifs(category)
      .then( gifs => {
        console.log('gifsenpromesa',gifs);
        setState({
          data:gifs,
          loading: false
        })
      })
  }, [ ])

  console.log('dataarrdeobj',state.data);
  return state

}

export default useFetchGifs;