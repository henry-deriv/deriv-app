import React from 'react';
import { screen, render } from '@testing-library/react';
import NoFavoriteSymbol from '../no-favorite-symbol';

describe('<NoFavoriteSymbol />', () => {
    it('should show correct text', () => {
        render(<NoFavoriteSymbol />);
        expect(screen.getByText('No favourites')).toBeInTheDocument();
        expect(screen.getByText('Your favourite markets will appear here.')).toBeInTheDocument();
    });
});
