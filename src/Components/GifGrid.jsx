import propTypes from 'prop-types';
import {GifItem} from './GifItem';
import useFetchGifs from '../hook/useFetchGifs';


export function GifGrid({ category, onCategoryDelete }) {

  const { images, isLoading } = useFetchGifs(category);

  const handleDelete = () => {
    onCategoryDelete(category);
  }

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Cargando...</p>}
      <button onClick={handleDelete}>Delete Categoria</button>
      <div className='card-grid'>
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: propTypes.string.isRequired,
  onCategoryDelete: propTypes.func.isRequired
}
