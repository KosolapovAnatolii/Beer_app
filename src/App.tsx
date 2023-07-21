import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './Components/Home';
import { useBeerStore } from './store/zustand';
import { BeerPage } from './Components/BeerPage';

function App() {
  const getBeers = useBeerStore((state) => state.getBeers);
  
  useEffect(() => {
    getBeers();
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
