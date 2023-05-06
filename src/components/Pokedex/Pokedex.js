import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Pokedex.module.css';
import right from '../../icons/right-arrow.png';
import left from '../../icons/left-arrow.png';
import question from '../../icons/question.png';
import search from '../../icons/search.png';
import { counterActions } from '../../store/index';

function Pokedex(props) {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    // State to update new pokemon as user scroll left or right of the pokedex
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };


    const leftButton = (
        <button aria-label='left' className={styles.leftButton} onClick={decrementHandler}>
            <img src={left} alt='left arrow button'/>
        </button>
    );

    const rightButton = (
        <button aria-label='right' className={styles.rightButton} onClick={incrementHandler}>
            <img src={right} alt='right arrow button'/>
        </button>
    );
        
    return (
        <div className={styles.pokedex}>
            <div className={styles.pokedexImage}>
                { count > 1 ? leftButton : <div></div> }
                <img id="main-pokedex" src={props.image} alt={props.species} />
                { count < 151 ? rightButton : <div></div> }
                <div></div>
                <h3 className={styles.pokemonName}>{props.species}</h3>
                <div></div>
            </div>
            <div className={styles.pokedexButtons}>
                <button aria-label='data' onClick={props.onButtonData}>
                    <img src={question} alt='questionButton' />
                </button>
                <button aria-label='search' onClick={props.onButtonSearch}>
                    <img src={search} alt='searchButton' />
                </button>
            </div>
        </div>
    );
}

export default Pokedex;