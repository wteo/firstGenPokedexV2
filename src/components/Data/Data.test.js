import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Data from './Data';


describe('Data Component', () => {

    test('Renders "data" as Title', () => {
        render(<Data />);
        const data = screen.getByTitle('data');
        expect(data).toBeInTheDocument();
    });

    test('Renders Pokemon with only 1 "Type" ', () => {
        render(<Data onTransition={true} type1='grass' />);
        const type = screen.getByText(/type/i);
        expect(type).toBeVisible();
    });

    test('Renders Pokemon with 2 "Types" ', () => {
        render(<Data onTransition={true} type1='grass' type2='poison' />);
        const type2 = screen.getByText(/type/i);
        expect(type2).toBeVisible();
    });

});