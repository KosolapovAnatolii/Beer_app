import { create } from 'zustand';
import { Beer } from '../Types/Beer';
import { getBeers } from '../utils/api';

interface BeerState {
  beers: Beer[];
  selectedBeersId: number[];
  currentPage: number;
  deleteBeerById: (id: number) => void;
  setSelectedBeersId: (ids: number[]) => void;
  setBeers: (currentPage: number) => Promise<void>;
  setCurrentPage: (page: number) => void;
};

export const useBeerStore = create<BeerState>((set) => ({
  beers: [],
  selectedBeersId: [],
  currentPage: 1,

  setSelectedBeersId: (ids) => set((state) => ({ selectedBeersId: ids })),

  deleteBeerById: (id) => {
    set((state) => {
      const filteredBeers = state.beers.filter((beer) => beer.id !== id);
      const currentPage = filteredBeers.length === 0 
        ? state.currentPage + 1 
        : state.currentPage;

      return { beers: filteredBeers, currentPage };
    });
  },

  setBeers: async (page) => {
    const data = await getBeers(page);
    set((state) => ({ beers: data }))
  },

  setCurrentPage: (page) => set((state) => ({ currentPage: page }))
}))
