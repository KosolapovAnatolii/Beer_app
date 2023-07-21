import './beerItem.scss';
import { Beer } from '../../Types/Beer';
import { useBeerStore } from '../../store/zustand';
import { MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';


interface Props {
  beer: Beer;
};

export const BeerItem: React.FC<Props> = ({ beer }) => {
  const [isSelected, setIsSelected] = useState(false);

  const { 
    id,
    name,
    image_url, 
    tagline, 
    description,
    abv,
    ibu
   } = beer;

   const selectedBeersId = useBeerStore((state) => state.selectedBeersId);
   const setSelectedBeersId = useBeerStore((state) => state.setSelectedBeersId);
   const navigate = useNavigate();

   const handleContextMenu = (
    id: number, 
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
   ) => {
    event.preventDefault();
    if (!isSelected) {
      setSelectedBeersId([...selectedBeersId, id]); 
      setIsSelected(true);
    }
    if (isSelected) {
      setSelectedBeersId(selectedBeersId.filter(beerId => beerId !== id)); 
      setIsSelected(false);
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    navigate(`/beer/${id}`);
  }


  return (
    <div 
      className={classNames(
        "beer-item", 
        { 'active-item': isSelected },
      )}
      onContextMenu={(event) => handleContextMenu(id, event)}
      onClick={(event) => handleClick(event)}
    >
      <img 
        src={image_url} 
        alt={name}
        className="beer-item__logo" 
      />
      <div className="beer-item__info">
        <h2 className="beer-item__info_name">{name}</h2>
        <span
          className="beer-item__info_tagline"
        >
          {tagline}
        </span>
        <h4
          className="beer-item__info_description-head"
        >
          Description
        </h4>
        <div
          className="beer-item__info_decription-text"
        >
          {description}
        </div>
        <span 
          className="beer-item__info_abv"
        >
          Abv: {abv}
        </span>
        <span 
          className="beer-item__info_ibu"
        >
          Ibu: {ibu}
        </span>
      </div>
    </div>
  )
}