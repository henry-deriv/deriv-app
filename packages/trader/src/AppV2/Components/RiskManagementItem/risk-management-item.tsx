import React from 'react';
import { ActionSheet, Text, TextField, ToggleSwitch } from '@deriv-com/quill-ui';
import { localize } from '@deriv/translations';
import RiskManagementInfoModal from '../RiskManagementInfoModal';
import DealCancellationRemainingTime from '../DealCancellationRemainingTime/deal-cancellation-remaining-time';

type RiskManagementItemProps = {
    label: React.ReactNode;
    modal_body_content: React.ReactNode;
    validation_message?: React.ReactNode;
    is_deal_cancellation?: boolean;
};

const RiskManagementItem = ({
    label,
    modal_body_content,
    validation_message,
    is_deal_cancellation = false,
}: RiskManagementItemProps) => {
    const [toggle, setToggle] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const dummy_boolean = false; // This will be flag from backend

    return (
        <div className='risk-management-item--container'>
            <div className='risk-management-item'>
                <span className='risk-management-item--title'>
                    <Text size='sm'>{label}</Text>
                    <RiskManagementInfoModal
                        header_content={label}
                        body_content={modal_body_content}
                        info_message='lorem lorem lorem ipsum'
                    />
                </span>
                {dummy_boolean && !is_deal_cancellation && <Text size='sm'>5 USD</Text>}
                {is_deal_cancellation && <DealCancellationRemainingTime />}
                {!dummy_boolean && !is_deal_cancellation && (
                    <ToggleSwitch checked={toggle} onChange={() => setToggle(!toggle)} />
                )}
            </div>
            {toggle && (
                <TextField
                    variant='fill'
                    inputSize='md'
                    textAlignment='center'
                    value='5.00 USD'
                    onFocus={() => setIsOpen(true)}
                />
            )}
            <ActionSheet.Root expandable isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ActionSheet.Portal>
                    <ActionSheet.Header title={label} />
                    <ActionSheet.Content>
                        <TextField
                            variant='fill'
                            inputSize='md'
                            textAlignment='center'
                            value='5.00 USD'
                            message={validation_message}
                        />
                    </ActionSheet.Content>
                    <ActionSheet.Footer
                        shouldCloseOnPrimaryButtonClick
                        primaryAction={{
                            content: localize('Save'),
                            onAction: () => {
                                //do the save
                            },
                        }}
                    />
                </ActionSheet.Portal>
            </ActionSheet.Root>
        </div>
    );
};
export default RiskManagementItem;
