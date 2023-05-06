import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Title from './Title';


describe('Title Component', () => {

    test('Renders image "Logo" ', () => {
        render(<Title />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });

    test('Renders header "About" ', () => {
        render(<Title />);
        const header = screen.getByRole('heading');
        expect(header).toBeInTheDocument();
    });
    
});