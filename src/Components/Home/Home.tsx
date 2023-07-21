import './home.scss';
import { Header } from '../Header';
import { BeerList } from '../BeerList';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <BeerList />
    </div>
  )
}