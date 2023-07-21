import { create } from 'zustand';
import { Beer } from '../Types/Beer';

interface BeerState {
  beers: Beer[];
  selectedBeersId: number[];
  deleteBeerById: (id: number) => void;
  setSelectedBeersId: (ids: number[]) => void;
  getBeers: () => Promise<void>;
};

export const useBeerStore = create<BeerState>((set) => ({
  beers: [],
  selectedBeersId: [],

  setSelectedBeersId: (ids) => set((state) => ({ selectedBeersId: ids })),

  deleteBeerById: (id) => {
    set((state) => ({
      beers: state.beers.filter((beer) => beer.id !== id),
    }));
  },

  getBeers: async () => {
    try {
      const data = await fetch('https://api.punkapi.com/v2/beers?page=1');
      const result = await data.json();
      set(() => ({beers: result}));
    }
    catch (error) {
      console.log('error fetching data', error)
    }
  },
}))
