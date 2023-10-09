import React, { Suspense } from 'react';
import { Loading } from '@deriv/components';
import { observer, useStore } from '@deriv/stores';
import TransactionDetailsDesktop from './transaction-details-desktop';
import TransactionDetailsMobile from './transaction-details-mobile';

export const TransactionDetails = observer(() => {
    const {
        ui: { is_mobile },
    } = useStore();
    return (
        <Suspense fallback={<Loading />}>
            {is_mobile ? <TransactionDetailsMobile /> : <TransactionDetailsDesktop />}
        </Suspense>
    );
});

export default TransactionDetails;
