import React from 'react';
import { localize } from '@deriv/translations';
import NumberSelector from 'App/Components/Form/number-selector.jsx';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import { connect } from 'Stores/connect';
import { getGrowthRatePercentage, getTickSizeBarrierPercentage, isEmptyObject } from '@deriv/shared';
import classNames from 'classnames';
import { TCoreStores } from '@deriv/stores/types.js';

type TAccumulator = {
    accumulator_range_list: number[];
    growth_rate: number;
    is_accumulator: boolean;
    onChange: React.ChangeEventHandler<HTMLElement>;
    tick_size_barrier: number;
    proposal_info: {
        ACCU?: {
            has_error?: boolean;
            id?: string;
        };
    };
};

const Accumulator = ({
    accumulator_range_list,
    growth_rate,
    is_accumulator,
    onChange,
    tick_size_barrier,
    proposal_info,
}: TAccumulator) => {
    // splitting accumulator_range_list into rows containing 5 values each:
    const arr_arr_numbers: number[][] = accumulator_range_list.reduce((acc: number[][], _el, index) => {
        if (index % 5 === 0) {
            acc.push(accumulator_range_list.slice(index, index + 5));
        }
        return acc;
    }, []);
    const has_error_or_not_loaded =
        proposal_info?.ACCU?.has_error ?? !proposal_info?.ACCU?.id ?? isEmptyObject(proposal_info);
    if (!accumulator_range_list.length) return null;
    return (
        <Fieldset
            className={classNames('trade-container__fieldset', 'accumulator')}
            header={localize('Accumulate')}
            is_center
            is_tooltip_disabled={has_error_or_not_loaded && is_accumulator}
            header_tooltip={localize(
                'Your stake will grow by {{growth_rate}}% at every tick starting from the second tick, as long as the price remains within a range of ±{{tick_size_barrier}} from the previous tick price.',
                {
                    growth_rate: getGrowthRatePercentage(growth_rate),
                    tick_size_barrier: getTickSizeBarrierPercentage(tick_size_barrier),
                }
            )}
        >
            <NumberSelector
                arr_arr_numbers={arr_arr_numbers}
                name='growth_rate'
                onChange={onChange}
                selected_number={growth_rate}
                should_show_in_percents
            />
        </Fieldset>
    );
};

export default connect(({ modules }: TCoreStores) => ({
    is_accumulator: modules.trade.is_accumulator,
    accumulator_range_list: modules.trade.accumulator_range_list,
    growth_rate: modules.trade.growth_rate,
    onChange: modules.trade.onChange,
    proposal_info: modules.trade.proposal_info,
    tick_size_barrier: modules.trade.tick_size_barrier,
}))(Accumulator);
