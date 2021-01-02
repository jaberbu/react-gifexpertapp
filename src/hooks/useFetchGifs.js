import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  // useEffect es para ejecutar solo la primera vez que se llama al componente
  // o cuando [ category ] cambie
  useEffect( () => {
    
    getGifs( category ).then( imgs => {

      setState({
        data: imgs,
        loading: false
      });

    });

  }, [ category ]);

  return state;

}