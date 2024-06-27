import React from 'react';
import { Tab } from '@deriv-com/quill-ui';
import useActiveSymbols from 'AppV2/Hooks/useActiveSymbols';
import { categorizeSymbols } from 'AppV2/Utils/symbol-categories-utils';
import MarketCategory from '../MarketCategory';
import MarketCategoryTab from '../MarketCategoryTab/market-category-tab';

const MarketCategories = () => {
    const { activeSymbols } = useActiveSymbols();
    const categorizedSymbols = categorizeSymbols(activeSymbols);

    return (
        <React.Fragment>
            <Tab.List>
                {Object.values(categorizedSymbols).map(category => (
                    <MarketCategoryTab key={category.market} category={category} />
                ))}
            </Tab.List>
            <Tab.Content className='market-categories__list'>
                {Object.values(categorizedSymbols).map(category => (
                    <MarketCategory key={category.market} category={category} />
                ))}
            </Tab.Content>
        </React.Fragment>
    );
};

export default MarketCategories;
