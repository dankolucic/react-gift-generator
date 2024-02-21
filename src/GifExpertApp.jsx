import { useState } from 'react';
import { AddCategory, GifGrid} from './components';


function GifExpertApp() {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    //primera opcion (para agregar un elemento a un arreglo)
    setCategories([newCategory, ...categories,])
    //segunda opción (para agregar un elemento a un arreglo)
    // setCategories( (cat) => [...cat, 'Hunter x Hunter'])

  }

  return (
    <>
      {/* TITULO */}
      <h1>GIT EXPERT</h1>

      {/* BUTTON */}
      {/* IMPORTANTE: Pasar una función al componente hijo para actualizar un estado en el evento padre (setCategory) */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* <button  onClick={onAddCategory}>Agregar Categoria</button> */}

      {/* INPUT */}

      {/* LISTADO DE GIFT */}

      {
        categories.map((category) => {
          return (
            <GifGrid category={category} key={category} />
          )

        })
      }


    </>
  )
}

export default GifExpertApp