import React, { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';

import styles from './App.module.css';

import Title from './components/Title/Title';
import Pokedex from './components/Pokedex/Pokedex';
import Data from './components/Data/Data';
import Search from './components/Search/Search';
import Results from './components/Results/Results';

import Pagination from './UI/Pagination';

import { fetchData } from './store/fetchData';

function App() {

  // Fetching pokemon data to feed into the Pokedex 
  const [pokemonData, setPokemonData] = useState({});
  const [isSearched, setIsSearched] = useState(false);

  const { image, species, type1, type2, height, weight } = pokemonData;

  const url = useSelector(state => state.url);

  useEffect(() => {
    fetchData(setPokemonData, url);
  }, [url]);
  
  // State to hide or show pokemon data
  const [dataButtonIsClicked, setDataButtonIsClicked] = useState(false);

  const dataButtonHandler = () => {
    setDataButtonIsClicked((dataButtonIsClicked) => !dataButtonIsClicked);
    setSearchButtonIsClicked(false);
    setIsSearched(false);
    setIsDataFetched(false);
    setResults([]);
    setCurrentPage(1);
  }

  // State to hide or show search menu
  const [searchButtonIsClicked, setSearchButtonIsClicked] = useState(false);

  const searchButtonHandler = () => {
    setDataButtonIsClicked(false);
    setIsSearched(false);
    setIsDataFetched(false);
    setResults([]);
    setCurrentPage(1);
    setSearchButtonIsClicked((searchButtonIsClicked) => !searchButtonIsClicked);
  }

  // States to handle filtered search
  const [results, setResults] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(null);
  const foundPokemon = [];

  const enteredSearchHandler = async (userInput) => {

    setIsDataFetched(true);

    const filters = {
      type1       : userInput.type1,
      type2       : userInput.type2,
      species     : userInput.species
    }

    try {

      for (let i = 1; i <= 151; i++) {
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        if (!response.ok) throw new Error(`Failed to fetch data.`);
        const data = await response.json();
        const species = data.name;
        const id = data.id;
        const image = data.sprites.front_default;
        const type1 = data.types[0].type.name;
        const type2 = data.types[1]?.type.name;

        if (filters.species !== '' && species.includes(filters.species.toLowerCase().trim())) {
          foundPokemon.push({species, image, id});
        } 
        
        if (filters.species === '') {
          if (filters.type1 === type1 && filters.type2 === type2) {
            foundPokemon.push({species, image, id});
          } else if ((filters.type1 === type1 || filters.type1 === type2) && filters.type2 === 'None') {
            foundPokemon.push({species, image, id});
          } else if (filters.type1 === 'None') {
            alert ('You must either first enter a value for first type or enter a value for species name.');
            setIsDataFetched(false);
            return;
          } 
        }
        
      }

      foundPokemon.length > 0 ? setResults(foundPokemon) : setResults('No Pokemon found. :-(');

    } catch (error) {
      setResults('An error occurred while fetching data. Please try again');
      setIsDataFetched(false);
      return;
    }

    setIsSearched(true);
    setCurrentPage(1);
    setIsDataFetched(false);
  };

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 8;
  
  // Get current posts
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <Title />
      <Suspense fallback={<p>Loading...</p>}>
        <Pokedex 
          image={image} 
          species={species} 
          onButtonData={dataButtonHandler} 
          onButtonSearch={searchButtonHandler} 
        />
        <div className={styles.dropDownNavigation}>
          <Data onTransition={dataButtonIsClicked} type1={type1} type2={type2} height={height} weight={weight} />
          <Search onTransition={searchButtonIsClicked} onSearch={enteredSearchHandler}/>
          {isDataFetched && <p>Fetching Data...</p>}
          {isSearched && results !== 'No Pokemon found. :-(' ? <Results currentResults={currentResults} totalResults={results} /> : <p>{results}</p>}
          { isSearched && results.length > 12 && results !== 'No Pokemon found. :-(' &&
            <Pagination 
              resultsPerPage={resultsPerPage} 
              totalResults={results.length} 
              paginate={paginate} 
            /> 
            }
        </div>
      </Suspense>
      <footer>© Wendy Teo 2023</footer>
    </div>
  );
}

export default App;
