import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Options from './Options';

describe('Options Component', () => {

    test('Renders "First Type" as text', () => {
        render(<Options description='First Type:' />);
        const type1 = screen.getByText('First Type:');
        expect(type1).toBeVisible();
    });

    test('Renders "Second Type" as text', () => {
        render(<Options description='Second Type:' />);
        const type2 = screen.getByText('Second Type:');
        expect(type2).toBeVisible();
    });
    
});