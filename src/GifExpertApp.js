import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categoies, setCategories] = useState(['Skateboard'])

  // const handleAdd = () => {
  //   // setCategories( [...categoies, 'HunterXHunter'] );
  //   setCategories( c => [...c, 'HunterXHunter' ]);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      {/* <button onClick={ handleAdd }>Agregar</button> */}

      <ol>
        { 
          categoies.map( category => (
            <GifGrid 
              key={ category }
              category={ category }/>
          ))
        }
      </ol>
    </>
  );

}