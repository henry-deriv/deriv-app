import { createContext } from 'react';

export type TAccountLimitsContext = {
    currency: string;
    footer_ref?: React.RefObject<HTMLElement>;
    overlay_ref: HTMLDivElement;
    toggleOverlay?: () => void;
};

const AccountLimitsContext = createContext<TAccountLimitsContext>({
    currency: '',
    overlay_ref: document.createElement('div'),
});

export default AccountLimitsContext;
