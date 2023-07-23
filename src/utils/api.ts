export const getBeers = async (page: number) => {
  try {
    const data = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
    const result = await data.json();
    
    return result;
  }
  catch (error) {
    console.log('error fetching data', error)
  }
}

export const getBeerById = async (id: number) => {
  try {
    const data = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const result = await data.json();

    return result;
  } 
  catch (error) {
    console.error('Error with download data from API:', error);
  }
};