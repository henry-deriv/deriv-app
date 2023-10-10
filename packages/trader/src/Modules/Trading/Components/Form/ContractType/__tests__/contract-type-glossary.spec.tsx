import React from 'react';
import { render, screen } from '@testing-library/react';
import ContractTypeGlossary from '../ContractTypeInfo/contract-type-glossary';

describe('<ContractTypeGlossary />', () => {
    it('Ensure accumulator glossary is rendered properly', () => {
        render(<ContractTypeGlossary category='accumulator' />);

        expect(
            screen.getByText(/You can choose a growth rate with values of 1%, 2%, 3%, 4%, and 5%./i)
        ).toBeInTheDocument();
    });
    it('Ensure vanilla glossary is rendered properly', () => {
        render(<ContractTypeGlossary category='vanillalongcall' />);

        expect(
            screen.getByText(
                'If you select "Call", you’ll earn a payout if the final price is above the strike price at expiry. Otherwise, you won’t receive a payout.'
            )
        ).toBeInTheDocument();
    });
    it('Ensure turbos glossary is rendered properly', () => {
        render(<ContractTypeGlossary category='turboslong' />);

        expect(
            screen.getByText(
                'We’ll offer to buy your contract at this price should you choose to sell it before its expiry. This is based on several factors, such as the current spot price, etc. However, we won’t offer a contract value if the remaining duration is below 15 seconds or if the contract duration is in ticks.'
            )
        ).toBeInTheDocument();
    });
    it('Ensure placeholder text is rendered if category does not exist', () => {
        const { container } = render(<ContractTypeGlossary category='test' />);

        expect(container).toBeEmptyDOMElement();
    });
});
