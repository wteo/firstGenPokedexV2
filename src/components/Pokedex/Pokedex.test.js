import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import Pokedex from './Pokedex';
import { Provider } from 'react-redux';
import store from '../../store/index'

const MockMainProvider = () => {
    return (
        <Provider store={store}>
            <Pokedex />
        </Provider>
    );
}

describe('Pokedex Component', () => {

    test('Renders all Buttons starting from the First Pokemon', () => {
        render(<MockMainProvider />); // Arrange
        const button = screen.getAllByRole('button').length; // Act
        expect(button).toBe(3); // Assert
    }); // result - 3, expected 3

    let count = 0;
    
    test('Renders all Buttons starting from the Tenth Pokemon', () => {
        render(<MockMainProvider />);
        const rightButton = screen.getByRole('button', { name: /right/i});
        while (count <= 10) {
            fireEvent.click(rightButton);
            count++
        }
        const allButtons = screen.getAllByRole('button').length;
        expect(allButtons).toBe(4);
    });
    
    test('Renders all Buttons at the Last Pokemon', () => {
        render(<MockMainProvider />);
        const rightButton = screen.getByRole('button', { name: /right/i});
        while (count <= 151) {
            fireEvent.click(rightButton);
            count++
        }
        const allButtons = screen.getAllByRole('button').length;
        expect(allButtons).toBe(3);
    }); 

    test('Renders all Buttons at the Second Last Pokemon', () => {
        render(<MockMainProvider />);
        const leftButton = screen.getByRole('button', { name: /left/i});
        fireEvent.click(leftButton);
        const allButtons = screen.getAllByRole('button').length;
        expect(allButtons).toBe(4);
        
    });

});

