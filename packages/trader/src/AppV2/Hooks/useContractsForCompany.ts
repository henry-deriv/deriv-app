import React, { useEffect, useRef } from 'react';
import { useTraderStore } from 'Stores/useTraderStores';
import { useStore } from '@deriv/stores';
import { cloneObject, getContractCategoriesConfig, getContractTypesConfig } from '@deriv/shared';
import { TConfig, TContractTypesList } from 'Types';
import { useDtraderQuery } from './useDtraderQuery';

type TContractsForCompanyResponse = {
    contracts_for_company: {
        available: {
            barrier_category: string;
            contract_category: string;
            contract_category_display: string;
            contract_display: string;
            contract_type: string;
            default_stake: number;
            sentiment: string;
        }[];
        hit_count: number;
    };
};

const useContractsForCompany = () => {
    const [contract_types_list, setContractTypesList] = React.useState<TContractTypesList | []>([]);
    const { setContractTypesListV2 } = useTraderStore();
    const { client } = useStore();
    const { landing_company_shortcode } = client;
    const {
        data: response,
        refetch,
        error,
        is_loading,
    } = useDtraderQuery<TContractsForCompanyResponse>(
        'contracts_for_company',
        {
            contracts_for_company: 1,
            landing_company: landing_company_shortcode,
        },
        {
            enabled: !!landing_company_shortcode,
        }
    );

    const contract_categories = getContractCategoriesConfig();
    const available_categories = cloneObject(contract_categories);
    const contract_types = getContractTypesConfig();
    const [available_contract_types, setAvailableContractTypes] = React.useState<
        ReturnType<typeof getContractTypesConfig> | undefined
    >();

    const prev_loginid = useRef(client.loginid);

    React.useEffect(() => {
        try {
            const { contracts_for_company } = response || {};

            const available_contract_types: ReturnType<typeof getContractTypesConfig> = {};

            if (!error && contracts_for_company?.available.length) {
                contracts_for_company.available.forEach((contract: any) => {
                    const type = Object.keys(contract_types).find(
                        key =>
                            contract_types[key].trade_types.indexOf(contract.contract_type) !== -1 &&
                            (contract.contract_type !== 'PUT' || contract_types[key].barrier_count === 1) // To distinguish betweeen Rise/Fall & Higher/Lower
                    );

                    if (!type) return; // ignore unsupported contract types

                    if (!available_contract_types[type]) {
                        // extend contract_categories to include what is needed to create the contract list
                        const category =
                            Object.keys(available_categories).find(
                                key => available_categories[key].categories.indexOf(type) !== -1
                            ) ?? '';

                        const sub_cats = available_categories[category]?.categories;

                        if (!sub_cats) return;

                        sub_cats[(sub_cats as string[]).indexOf(type)] = {
                            value: type,
                            text: contract_types[type].title,
                            barrier_category: contract.barrier_category,
                        };

                        available_contract_types[type] = cloneObject(contract_types[type]);
                    }
                    const config: TConfig = available_contract_types[type].config || {};
                    config.barrier_category = contract.barrier_category as TConfig['barrier_category'];

                    available_contract_types[type].config = config;
                });

                setContractTypesListV2(available_categories);
                setContractTypesList(available_categories);
                setAvailableContractTypes(available_contract_types);
            }
        } catch (err) {
            /* eslint-disable no-console */
            console.error(err);
        }
    }, [response]);

    useEffect(() => {
        if (prev_loginid.current && prev_loginid.current !== client.loginid && !client.is_switching) {
            setContractTypesList([]);
            setAvailableContractTypes(undefined);
            refetch();
        }
    }, [client.loginid, client.is_switching]);

    return { contract_types_list, available_contract_types, is_loading };
};

export default useContractsForCompany;
