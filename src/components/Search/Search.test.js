import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Search from './Search';

describe('Search Component', () => {
    test('Renders "search" as Title', () => {
        render(<Search />); 
        const search = screen.getByTitle('search');
        expect(search).toBeInTheDocument(); 
    });


});

