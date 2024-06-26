import { useState } from "react";
import {AddCategory, GifGrid} from "./Components";


export function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch']);
  
  const onCategoryAdd = (value) => {
    if ( categories.includes(value))return;
    setCategories([value, ...categories ]);
  }

  const onCategoryDelete = ( value ) => {
    setCategories(categories.filter((category) => category !== value));
  }

  return ( 
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onCategoryAdd = { onCategoryAdd } />

      {
        categories.map((category) => 
        <GifGrid key={category} category = {category} onCategoryDelete = {onCategoryDelete}/> )
      }
      
    </>
   );
}

export default GifExpertApp;