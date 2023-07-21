import { Link, useParams } from 'react-router-dom';
import './beerPage.scss';
import { useEffect, useState } from 'react';
// import { Beer } from '../../Types/Beer';
import {  Malt } from '../../Types/Malt';
import { Hops } from '../../Types/Hops';

export const BeerPage: React.FC = () => {
  const [beerData, setBeerData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { beerId } = useParams();

  useEffect(() => {
    const fetchBeerData = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`);
        const data = await response.json();
        setBeerData(data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error with download data from API:', error);
        setLoading(false);
      }
    };

    fetchBeerData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!beerData) {
    return <div>No data found</div>;
  }

  console.log(beerData);

  return (
    <section className='beer-page'>
      <header className="beer-page__header header">
        <Link 
          to="/"
          className="header__link"
        >
          ← Home
        </Link>
        <h2 className="header__name">{beerData.name}</h2>
      </header>

      <div className="beer-page__body">
        <img 
          src={beerData.image_url} 
          alt={beerData.name}
          className="beer-page__image" 
        />

        <div className="beer-page__content">
          <p className="beer-page__about">{beerData.description}</p>

          <div className="beer-page__recipe">
            <div className="proof section">
              <h4 className="proof__title">Proofs</h4>

              <span className="proof__first-brewed">
                First brewed: {beerData.first_brewed}
              </span>

              <span className="proof__abv">
                Abv: {beerData.abv}
              </span>

              <span className="proof__ibu">
                Ibu: {beerData.ibu}
              </span>

              <span className="proof__target-og">
                Target OG: {beerData.target_og}
              </span>

              <span className="proof__target-fg">
                Target FG: {beerData.target_fg}
              </span>

              <span className="proof__ebc">
                Ebc: {beerData.ebc}
              </span>

              <span className="proof__srm">
                Srm: {beerData.srm}
              </span>

              <span className="proof__ph">
                Ph: {beerData.ph}
              </span>

              <span className="proof__attenuation-level">
                Attenuation level: {beerData.attenuation_level}
              </span>

              <span className="proof__volume">
                Volume: {beerData.volume.value} {beerData.volume.unit}
              </span>

              <span className="proof__boil-volume">
                Boil volume: {beerData.boil_volume.value} {beerData.boil_volume.unit}
              </span> 
            </div>

            <div className="divider"/>

            <div className="ingredients section">
              <h4
                className="ingredients__title title"
              >
                Ingredients
              </h4>

              <h5 className="title">Malts:</h5>
              
              <ul className="ingredients__malt">
                {beerData.ingredients.malt.map((malt: Malt) => (
                  <li
                  key={Math.random()}
                  >
                    {malt.amount.value} {malt.amount.unit} of {malt.name} malt
                  </li>
                ))}
              </ul>

              <h5 className="title">Hops:</h5>

              <ul className="ingredients__hops">
                {beerData.ingredients.hops.map((hop: Hops) => (
                  <li
                    key={Math.random()}
                  >
                    {hop.amount.value} {hop.amount.unit} of {hop.name} hop
                  </li>
                ))}
              </ul>

              <p className="ingredients__yeast">
                Yeast: <span>{beerData.ingredients.yeast}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}