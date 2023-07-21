import { useCallback } from 'react';
import { useBeerStore } from '../../store/zustand';
import './header.scss';

export const Header: React.FC = () => {
  const selectedBeersId = useBeerStore((state) => state.selectedBeersId);
  const removeBeer = useBeerStore((state) => state.deleteBeerById);
  const setSelectedBeersId = useBeerStore((state) => state.setSelectedBeersId);

  const handleRemove = useCallback(() => {
    selectedBeersId.forEach(id => removeBeer(id));
    setSelectedBeersId([]);
  }, [selectedBeersId, removeBeer, setSelectedBeersId]);

  return (
    <header className="header">
      <h1 className="header__title">Best bears</h1>
      <button 
        className="header__delete-button"
        disabled={selectedBeersId.length === 0}
        onClick={handleRemove}
      >
        Delete selected beers
      </button>
    </header>
  )
}