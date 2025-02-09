import React from 'react';
import { render, screen } from '@testing-library/react';
import CFDInstrumentsLabelHighlighted from '../cfd-instruments-label-highlighted';
import { StoreProvider, mockStore } from '@deriv/stores';

jest.mock('../instruments-icon-with-label', () => jest.fn(() => <div>Mocked Icon</div>));

describe('<CFDInstrumentsLabelHighlighted />', () => {
    const mock = mockStore({
        traders_hub: {
            selected_region: 'Non-EU',
            is_eu_user: false,
        },
    });

    const mocked_props = {
        trading_platforms: {
            market_type: 'financial',
            shortcode: 'maltainvest',
            instruments: ['Forex', 'Cryptocurrencies'],
            product_details: { max_leverage: '1:30', min_spread: '0.5' },
            platform: 'ctrader',
        },
    };

    it('should renders icons for product type standard', () => {
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <StoreProvider store={mock}>{children}</StoreProvider>
        );
        render(<CFDInstrumentsLabelHighlighted {...mocked_props} />, { wrapper });

        const containerElement = screen.getByTestId('dt_compare_cfd_account_outline__container');
        expect(containerElement).toBeInTheDocument();
        expect(containerElement).toHaveClass('compare-cfd-account-outline');
    });

    it('should renders icons for market type all financial', () => {
        mocked_props.trading_platforms.market_type = 'financial';
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <StoreProvider store={mock}>{children}</StoreProvider>
        );
        render(<CFDInstrumentsLabelHighlighted {...mocked_props} />, { wrapper });
        const containerElement = screen.getByTestId('dt_compare_cfd_account_outline__container');
        expect(containerElement).toBeInTheDocument();
        expect(containerElement).toHaveClass('compare-cfd-account-outline');
    });

    it('should renders icons for market type all', () => {
        mocked_props.trading_platforms.market_type = 'financial';
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <StoreProvider store={mock}>{children}</StoreProvider>
        );
        render(<CFDInstrumentsLabelHighlighted {...mocked_props} />, { wrapper });
        const containerElement = screen.getByTestId('dt_compare_cfd_account_outline__container');
        expect(containerElement).toBeInTheDocument();
        expect(containerElement).toHaveClass('compare-cfd-account-outline');
    });
});
