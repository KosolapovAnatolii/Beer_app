import { BeerItem } from '../BeerItem';
import './beerList.scss';
import { useBeerStore } from '../../store/zustand';
import { useCallback, useEffect, useState } from 'react';
import { Beer } from '../../Types/Beer';

export const BeerList: React.FC = () => {
  const [currentBeers, setCurrentBeers] = useState<Beer[]>([]);

  const beers = useBeerStore((state) => state.beers);

  const getCurrentBeers = useCallback(() => {
    const fifteenBeers = beers.slice(0, 15);
    setCurrentBeers(fifteenBeers);
  }, [beers]);

  useEffect(() => {
    getCurrentBeers();
  }, [beers, getCurrentBeers]);
  
  return (
    <section className='beer-list'>
      {currentBeers.map((beer) => (
        <BeerItem 
          key={beer.id} 
          beer={beer}
         />
      ))}
    </section>
  );
};

