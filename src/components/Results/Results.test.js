import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../../store/index'

import Results from './Results';

const results = [];

const fetchData =  async(i) => {
    const url = './mock/pokemonResults.json';
    const response = await fetch(url);
    const data = await response.json();
    return data.results[i];
};

const MockResultProvider = () => {
    return (
        <Provider store={store}>
            <Results results={results} />
        </Provider>
    );
}


describe('Results Component', () => {

    test('Renders "result" as Text', () => {
        render(<MockResultProvider />);
        const resultText = screen.getByText(/result/i);
        expect(resultText).toBeInTheDocument();
    });   

    test('Renders Pokemon via Fetching Data from Mock Pokemon API', () => {
        results.push(fetchData(1));
        render(<MockResultProvider />);
        const listedPokemon = screen.getAllByTitle('listed');
        expect(listedPokemon.length).toBe(1);
    })

  
    test('Renders Pokemon via Fetching Data from Mock Pokemon API', () => {
        results.pop();
        let i = 0;
        while (i < 3) {
            results.push(fetchData(i));
            i++;
        }
        render(<MockResultProvider />);
        const listedPokemon = screen.getAllByTitle('listed');
        expect(listedPokemon.length).toBe(3);
    })
    
});
