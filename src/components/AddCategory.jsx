import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState([])

    //registra los cambios en el input event.target.value es en donde quedan los cambios
    const onInputChange = ({target}) => {
        setInputValue(target.value);
        console.log(target.value)
    }

    //onSubmit se ejecuta cuando se da "ENTER"
    const onSubmit = ( event ) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        // Utilización de props (función) para setear estado en el componente padre (GifExpertApp)
        onNewCategory(inputValue.trim());

        // setCategories( categories => [...categories, inputValue])
        // console.log(inputValue)

        setInputValue('')

    }
  
  
  return (
    <form onSubmit={ (event) => onSubmit(event)}>
    
        <input
            type="text"
            placeholder="Buscar gifs"
            value= {inputValue}
            onChange= {(event) => onInputChange (event)} 
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}


