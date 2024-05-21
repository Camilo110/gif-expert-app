import propTypes from 'prop-types';
import { useState } from "react";

export function AddCategory( { onCategoryAdd } ) {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onCategoryAdd( inputValue.trim());
    setInputValue('');
  }

  return ( 
    
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Buscar Gifs" 
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
   );
}

AddCategory.propTypes = {
  onCategoryAdd: propTypes.func.isRequired
}
