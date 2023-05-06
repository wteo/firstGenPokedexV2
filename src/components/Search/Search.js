import React, { useState, useEffect } from 'react';

import Card from '../../UI/Card';
import Options, { types } from './Options/Options';

import styles from './Search.module.css';

function Search(props) {

  const [selectedType1, setSelectedType1] = useState(types[0]);
  const [selectedType2, setSelectedType2] = useState(types[0]);
  const [keyedSpecies, setKeyedSpecies] = useState('');

  const selectTypeHandler1 = (event) => {
    setSelectedType1(event.target.value);
  }

  const selectTypeHandler2 = (event) => {
    setSelectedType2(event.target.value);
  }

  const keySpeciesHandler = (event) => {
    setKeyedSpecies(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const filters = {
      type1: selectedType1,
      type2: selectedType2,
      species: keyedSpecies
    }
    props.onSearch(filters);
    setSelectedType1(types[0]);
    setSelectedType2(types[0]);
    setKeyedSpecies('');
  };


  useEffect(() => {
    if (selectedType1 === selectedType2 && selectedType1 !== types[0] && selectedType2 !== types[0]) {
      alert('Second type cannot be the same as the first type!');
      setSelectedType2(types[0]);
      return;
    }
  }, [selectedType1, selectedType2]);


  return (
    <Card onTransition={props.onTransition} title='search'>
      <form aria-label='form-submit' onSubmit={submitHandler}>
        <p>Search Pokemon by their type(s).</p>
        <div className={styles.typesList}>
          <Options 
            description='First Type:' 
            id='firstType' 
            onType={selectTypeHandler1} 
            name={selectedType1} 
            value={selectedType1}
          />
          <Options 
            description='Second Type:' 
            id='secondType' 
            onType={selectTypeHandler2} 
            name={selectedType2} 
            value={selectedType2}
          />
        </div>
        
        <p>Or by name.</p>
        <label>Species name:</label>
        <input 
          type='text' 
          placeholder='Enter a pokemon species' 
          onChange={keySpeciesHandler} 
          name={keyedSpecies} 
          value={keyedSpecies}
        />
        <br />
        <button className={styles.searchButton}>Search</button>
      </form>
    </Card>
  );
}

export default Search;