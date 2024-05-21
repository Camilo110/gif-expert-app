import propTypes from 'prop-types';

export function GifItem({url , title}) {
  return ( 
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
   );
}

GifItem.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}
