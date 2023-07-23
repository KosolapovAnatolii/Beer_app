import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './Components/Home';
import { useBeerStore } from './store/zustand';
import { BeerPage } from './Components/BeerPage';

function App() {
  const setBeers = useBeerStore((state) => state.setBeers);
  const currentPage = useBeerStore((state) => state.currentPage);
  
  useEffect(() => {
    setBeers(currentPage);
  });
  
  return (
    <>
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/beer/:beerId' element={<BeerPage />} />
      <Route path='*' element={<h4>Page not foud</h4>}/>
    </Routes>
    </>
  );
}

export default App;
