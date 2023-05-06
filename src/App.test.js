import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from './store/index'

import App from './App';

const MockAppProvider = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

describe('App Component', () => {

    test('Data Box becomes visible when "Data" button is clicked', () => {
        render(<MockAppProvider />);
        const dataButton = screen.getByRole('button', { name: /data/i });
        fireEvent.click(dataButton);
        const heightText = screen.getByText(/height/i);
        expect(heightText).toBeVisible();
    });

    test('Search Box becomes visible when "Search" button is clicked', () => {
        render(<MockAppProvider />);
        const searchButton = screen.getByRole('button', { name: /search/i });
        fireEvent.click(searchButton);
        const typeText = screen.getAllByText(/type/i);
        expect(typeText.length).toBe(3);
    })

    test('Renders Fetching Data status', () => {
        render(<MockAppProvider />);
        const searchButton = screen.getByRole('button', { name: /search/i });
        fireEvent.click(searchButton);
        const type1 = screen.getByText(/First Type:/i);
        fireEvent.change(type1, { target: { name: 'Fire'}});
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        const searchedPokemon = screen.getByText(/fetching/i);
        expect(searchedPokemon).toBeInTheDocument();
    })

});
