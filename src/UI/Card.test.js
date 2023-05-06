import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Card from './Card';


describe('Card Component', () => {

    test('Renders "data" as Title', () => {
        render(<Card title='title' />);
        const title = screen.getByTitle(/title/i);
        expect(title).toBeInTheDocument();
    })

});