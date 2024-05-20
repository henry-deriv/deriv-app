import React from 'react';
import { Text } from '@deriv-com/quill-ui';
import PayoutInfoModal from 'AppV2/Components/PayoutInfoModal';
import ChartPlaceholder from '../Chart';
import { Localize } from '@deriv/translations';

const ContractDetails = () => {
    return (
        <div className='contract-details'>
            <div className='placeholder'>
                <Text size='sm'>Contract Details</Text>
            </div>
            <PayoutInfoModal
                body_content={
                    <Localize i18n_default_text='After the entry spot tick, your stake will grow continuously by 1% for every tick that the spot price remains within the ± 0.06444% from the previous spot price.' />
                }
            />
            <div className='placeholder'>
                <Text size='sm'>Contract card</Text>
            </div>
            Take Profit
            <div className='placeholder'>
                <ChartPlaceholder />
            </div>
            <div className='placeholder'>
                <Text size='sm'>Take profit</Text>
            </div>
            <div className='placeholder'>
                <Text size='sm'>Order details</Text>
            </div>
            <div className='placeholder'>
                <Text size='sm'>Entry & exit details</Text>
            </div>
        </div>
    );
};

export default ContractDetails;
