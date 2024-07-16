import merge from 'lodash.merge';

import type { TCoreStores, TStores } from '../types';

const mock = (): TStores & { is_mock: boolean } => {
    const common_store_error = {
        app_routing_history: [],
        header: '',
        message: '',
        type: '',
        redirect_label: '',
        redirect_to: '',
        should_clear_error_on_click: false,
        should_show_refresh: false,
        redirectOnClick: jest.fn(),
    };
    return {
        is_mock: true,
        client: {
            account_settings: {},
            account_type: 'virtual',
            accounts: {},
            active_account_landing_company: '',
            trading_platform_available_accounts: [],
            ctrader_trading_platform_available_accounts: [],
            account_limits: {},
            self_exclusion: {},
            getSelfExclusion: jest.fn(),
            account_status: {
                p2p_poa_required: 1,
                authentication: {
                    attempts: {
                        count: 1,
                        history: [
                            {
                                country_code: 'id',
                                id: '8919',
                                service: 'manual',
                                status: 'verified',
                                timestamp: 1674633681,
                            },
                        ],
                        latest: {
                            country_code: 'id',
                            id: '8919',
                            service: 'manual',
                            status: 'verified',
                            timestamp: 1674633681,
                        },
                    },
                    document: {
                        status: 'verified',
                    },

                    identity: {
                        services: {
                            idv: {
                                last_rejected: [],
                                reported_properties: {},
                                status: 'none',
                                submissions_left: 3,
                            },
                            manual: {
                                status: 'none',
                            },
                            onfido: {
                                country_code: 'IDN',
                                documents_supported: [
                                    'Driving Licence',
                                    'National Identity Card',
                                    'Passport',
                                    'Residence Permit',
                                ],
                                is_country_supported: 1,
                                last_rejected: [],
                                reported_properties: {},
                                status: 'none',
                                submissions_left: 3,
                            },
                        },
                        status: 'verified',
                    },
                    income: {
                        status: 'none',
                    },
                    needs_verification: [],
                    ownership: {
                        requests: [],
                        status: 'none',
                    },
                },
                currency_config: {
                    USD: {
                        is_deposit_suspended: 0,
                        is_withdrawal_suspended: 0,
                    },
                },
                p2p_status: 'none',
                prompt_client_to_authenticate: 0,
                risk_classification: 'low',
                status: [
                    'age_verification',
                    'allow_document_upload',
                    'authenticated',
                    'dxtrade_password_not_set',
                    'financial_information_not_complete',
                    'idv_disallowed',
                    'mt5_password_not_set',
                    'trading_experience_not_complete',
                ],
            },
            balance: '',
            can_change_fiat_currency: false,
            clients_country: '',
            currency: '',
            currencies_list: [{ text: '', value: '', has_tool_tip: false }],
            current_currency_type: '',
            current_fiat_currency: '',
            current_landing_company: { support_professional_client: '' },
            cfd_score: 0,
            ctrader_accounts_list: [],
            ctrader_total_balance: 0,
            email_address: '',
            setCFDScore: jest.fn(),
            getLimits: jest.fn(),
            has_active_real_account: false,
            getTwoFAStatus: jest.fn(),
            has_fiat: false,
            has_logged_out: false,
            has_cookie_account: false,
            has_maltainvest_account: false,
            has_restricted_mt5_account: false,
            has_wallet: false,
            initialized_broadcast: false,
            is_account_setting_loaded: false,
            is_authorize: false,
            is_deposit_lock: false,
            is_dxtrade_allowed: false,
            is_dxtrade_password_not_set: false,
            is_eu: false,
            is_eu_country: false,
            has_residence: false,
            is_financial_account: false,
            is_financial_assessment_needed: false,
            is_financial_information_incomplete: false,
            is_low_risk: false,
            is_identity_verification_needed: false,
            is_landing_company_loaded: false,
            is_logged_in: false,
            is_logging_in: false,
            is_mt5_password_not_set: false,
            is_mt5_account_list_updated: false,
            is_p2p_enabled: false,
            is_proof_of_ownership_enabled: false,
            is_poa_expired: false,
            is_populating_dxtrade_account_list: false,
            is_populating_ctrader_account_list: false,
            is_social_signup: false,
            is_single_currency: false,
            is_switching: false,
            is_tnc_needed: false,
            is_high_risk: false,
            is_trading_experience_incomplete: false,
            is_unwelcome: false,
            is_virtual: false,
            is_withdrawal_lock: false,
            is_populating_account_list: false,
            landing_company_shortcode: '',
            local_currency_config: {
                currency: '',
                decimal_places: 0,
            },
            loginid: '',
            pre_switch_broadcast: false,
            residence: '',
            is_svg: false,
            responseMt5LoginList: jest.fn(),
            responseTradingPlatformAccountsList: jest.fn(),
            setFinancialAndTradingAssessment: jest.fn(),
            standpoint: {
                financial_company: '',
                gaming_company: '',
                maltainvest: false,
                svg: false,
            },
            switchAccount: jest.fn(),
            verification_code: {
                payment_agent_withdraw: '',
                payment_withdraw: '',
                request_email: '',
                reset_password: '',
                signup: '',
                system_email_change: '',
                trading_platform_dxtrade_password_reset: '',
                trading_platform_mt5_password_reset: '',
            },
            email: '',
            fetchStatesList: jest.fn(),
            setVerificationCode: jest.fn(),
            updateAccountStatus: jest.fn(),
            is_authentication_needed: false,
            authentication_status: {
                document_status: '',
                identity_status: '',
            },
            mt5_login_list: [],
            logout: jest.fn(),
            should_allow_authentication: false,
            should_allow_poinc_authentication: false,
            active_accounts: [],
            account_list: [],
            available_crypto_currencies: [],
            selectCurrency: jest.fn(),
            setAccountStatus: jest.fn(),
            setBalanceOtherAccounts: jest.fn(),
            setInitialized: jest.fn(),
            setLogout: jest.fn(),
            setP2pAdvertiserInfo: jest.fn(),
            setPreSwitchAccount: jest.fn(),
            social_identity_provider: '',
            switched: false,
            switch_broadcast: false,
            switchEndSignal: jest.fn(),
            isEligibleForMoreRealMt5: jest.fn(),
            isEligibleForMoreDemoMt5Svg: jest.fn(),
            updateMT5Status: jest.fn(),
            fetchResidenceList: jest.fn(),
            residence_list: [],
            should_restrict_bvi_account_creation: false,
            should_restrict_vanuatu_account_creation: false,
            fetchAccountSettings: jest.fn(),
            setAccountSettings: jest.fn(),
            upgradeable_landing_companies: [],
            is_populating_mt5_account_list: false,
            landing_companies: {},
            landing_company: {},
            upgradeable_currencies: [],
            getChangeableFields: jest.fn(),
            is_mt5_allowed: false,
            mt5_disabled_signup_types: {
                real: false,
                demo: false,
            },
            dxtrade_disabled_signup_types: {
                real: false,
                demo: false,
            },
            dxtrade_accounts_list_error: null,
            website_status: {
                dx_trade_status: {
                    all: 0,
                    demo: 0,
                    real: 0,
                },
                mt5_status: {
                    real: [],
                    demo: [],
                },
            },
            is_fully_authenticated: false,
            states_list: [],
            is_crypto: jest.fn(),
            dxtrade_accounts_list: [],
            default_currency: 'USD',
            resetVirtualBalance: jest.fn(),
            has_enabled_two_fa: false,
            setTwoFAStatus: jest.fn(),
            has_changed_two_fa: false,
            setTwoFAChangedStatus: jest.fn(),
            real_account_creation_unlock_date: '',
            has_any_real_account: false,
            setPrevAccountType: jest.fn(),
            prev_account_type: 'demo',
            setLoginInformation: jest.fn(),
            init: jest.fn(),
            setLoginId: jest.fn(),
            resetLocalStorageValues: jest.fn(),
            setIsAlreadyAttempted: jest.fn(),
            is_already_attempted: false,
            is_bot_allowed: false,
            account_open_date: undefined,
            setAccounts: jest.fn(),
            updateMt5LoginList: jest.fn(),
            should_show_eu_error: false,
            is_options_blocked: false,
            setIsP2PEnabled: jest.fn(),
            real_account_signup_form_data: [],
            real_account_signup_form_step: 0,
            setRealAccountSignupFormData: jest.fn(),
            setRealAccountSignupFormStep: jest.fn(),
            wallet_migration_state: 'ineligible',
            startWalletMigration: jest.fn(),
            resetWalletMigration: jest.fn(),
            is_wallet_migration_request_is_in_progress: false,
            is_passkey_supported: false,
            should_show_effortless_login_modal: false,
            setIsPasskeySupported: jest.fn(),
            setShouldShowEffortlessLoginModal: jest.fn(),
            fetchShouldShowEffortlessLoginModal: jest.fn(),
            exchange_rates: {},
            getExchangeRate: jest.fn(),
            subscribeToExchangeRate: jest.fn(),
            unsubscribeFromExchangeRate: jest.fn(),
            unsubscribeFromAllExchangeRates: jest.fn(),
        },
        common: {
            error: common_store_error,
            current_language: 'EN',
            isCurrentLanguage: jest.fn(),
            is_from_derivgo: false,
            is_socket_opened: false,
            has_error: false,
            platform: '',
            routeBackInApp: jest.fn(),
            routeTo: jest.fn(),
            changeCurrentLanguage: jest.fn(),
            changeSelectedLanguage: jest.fn(),
            is_network_online: false,
            network_status: {},
            services_error: {},
            server_time: new Date() as unknown as TCoreStores['common']['server_time'],
            setError: jest.fn(),
            setSelectedContractType: jest.fn(),
            setServicesError: jest.fn(),
            showError: jest.fn(),
            is_language_changing: false,
            setAppstorePlatform: jest.fn(),
            app_routing_history: [],
            getExchangeRate: jest.fn(),
        },
        ui: {
            advanced_duration_unit: 't',
            advanced_expiry_type: 'duration',
            account_switcher_disabled_message: '',
            app_contents_scroll_ref: {
                current: null,
            },
            current_focus: null,
            duration_t: 5,
            getDurationFromUnit: jest.fn(),
            is_account_settings_visible: false,
            is_account_switcher_disabled: false,
            is_advanced_duration: false,
            is_history_tab_active: false,
            is_loading: false,
            is_cashier_visible: false,
            is_wallet_modal_visible: false,
            is_chart_layout_default: false,
            is_chart_countdown_visible: false,
            is_closing_create_real_account_modal: false,
            is_dark_mode_on: false,
            is_from_signup_account: false,
            is_from_success_deposit_modal: false,
            is_language_settings_modal_on: false,
            is_desktop: false,
            is_app_disabled: false,
            has_only_forward_starting_contracts: false,
            header_extension: null,
            is_link_expired_modal_visible: false,
            is_mobile: false,
            is_tablet: false,
            is_mobile_language_menu_open: false,
            is_positions_drawer_on: false,
            is_reports_visible: false,
            is_verification_submitted: false,
            is_reset_email_modal_visible: false,
            is_route_modal_on: false,
            is_services_error_visible: false,
            is_trading_assessment_for_existing_user_enabled: false,
            disableApp: jest.fn(),
            enableApp: jest.fn(),
            setCurrentFocus: jest.fn(),
            toggleAccountsDialog: jest.fn(),
            toggleAccountSettings: jest.fn(),
            toggleCashier: jest.fn(),
            setDarkMode: jest.fn(),
            setReportsTabIndex: jest.fn(),
            setIsMT5VerificationFailedModal: jest.fn(),
            has_real_account_signup_ended: false,
            real_account_signup_target: '',
            real_account_signup: {
                active_modal_index: -1,
                previous_currency: '',
                current_currency: '',
                success_message: '',
                error_message: '',
            },
            resetRealAccountSignupParams: jest.fn(),
            notification_messages_ui: jest.fn(),
            onChangeUiStore: jest.fn(),
            openPositionsDrawer: jest.fn(),
            openRealAccountSignup: jest.fn(),
            setChartCountdown: jest.fn(),
            setIsWalletModalVisible: jest.fn(),
            setHasOnlyForwardingContracts: jest.fn(),
            setIsClosingCreateRealAccountModal: jest.fn(),
            setIsFromSuccessDepositModal: jest.fn(),
            setIsFromSignupAccount: jest.fn(),
            setMobileLanguageMenuOpen: jest.fn(),
            setRealAccountSignupEnd: jest.fn(),
            setPromptHandler: jest.fn(),
            setPurchaseState: jest.fn(),
            setAppContentsScrollRef: jest.fn(),
            shouldNavigateAfterChooseCrypto: jest.fn(),
            simple_duration_unit: 't',
            toggleHistoryTab: jest.fn(),
            toggleLanguageSettingsModal: jest.fn(),
            togglePositionsDrawer: jest.fn(),
            toggleResetEmailModal: jest.fn(),
            toggleLinkExpiredModal: jest.fn(),
            toggleServicesErrorModal: jest.fn(),
            toggleSetCurrencyModal: jest.fn(),
            addToast: jest.fn(),
            removeToast: jest.fn(),
            resetPurchaseStates: jest.fn(),
            reports_route_tab_index: 1,
            should_show_cancellation_warning: false,
            should_show_one_time_deposit_modal: false,
            should_show_account_success_modal: false,
            should_trigger_tour_guide: false,
            toggleCancellationWarning: jest.fn(),
            setShouldShowOneTimeDepositModal: jest.fn(),
            toggleAccountSuccessModal: jest.fn(),
            toggleReports: jest.fn(),
            setSubSectionIndex: jest.fn(),
            sub_section_index: 0,
            toggleReadyToDepositModal: jest.fn(),
            is_ready_to_deposit_modal_visible: false,
            is_real_acc_signup_on: false,
            is_need_real_account_for_cashier_modal_visible: false,
            is_verification_modal_visible: false,
            is_mf_verification_pending_modal_visible: false,
            is_mt5_migration_modal_enabled: false,
            is_mt5_migration_modal_open: false,
            toggleNeedRealAccountForCashierModal: jest.fn(),
            is_switch_to_deriv_account_modal_visible: false,
            openSwitchToRealAccountModal: jest.fn(),
            is_top_up_virtual_open: false,
            is_top_up_virtual_in_progress: false,
            is_top_up_virtual_success: false,
            closeTopUpModal: jest.fn(),
            closeSuccessTopUpModal: jest.fn(),
            is_cfd_reset_password_modal_enabled: false,
            setCFDPasswordResetModal: jest.fn(),
            openDerivRealAccountNeededModal: jest.fn(),
            populateHeaderExtensions: jest.fn(),
            populateSettingsExtensions: jest.fn(),
            purchase_states: [],
            setShouldShowCooldownModal: jest.fn(),
            setIsVerificationModalVisible: jest.fn(),
            setIsVerificationSubmitted: jest.fn(),
            setShouldTriggerTourGuide: jest.fn(),
            populateFooterExtensions: jest.fn(),
            openAccountNeededModal: jest.fn(),
            is_accounts_switcher_on: false,
            openTopUpModal: jest.fn(),
            toggleShouldShowRealAccountsList: jest.fn(),
            is_reset_trading_password_modal_visible: false,
            setResetTradingPasswordModalOpen: jest.fn(),
            setIsMFVericationPendingModal: jest.fn(),
            setMT5MigrationModalEnabled: jest.fn(),
            toggleMT5MigrationModal: jest.fn(),
            vanilla_trade_type: 'VANILLALONGCALL',
            is_additional_kyc_info_modal_open: false,
            toggleAdditionalKycInfoModal: jest.fn(),
            is_kyc_information_submitted_modal_open: false,
            isUrlUnavailableModalVisible: false,
            toggleKycInformationSubmittedModal: jest.fn(),
            setAccountSwitcherDisabledMessage: jest.fn(),
            toggleUrlUnavailableModal: jest.fn(),
            is_set_currency_modal_visible: false,
        },
        traders_hub: {
            getAccount: jest.fn(),
            closeModal: jest.fn(),
            combined_cfd_mt5_accounts: [],
            available_cfd_accounts: [],
            content_flag: '',
            CFDs_restricted_countries: false,
            openModal: jest.fn(),
            selected_account: {
                login: '',
                account_id: '',
            },
            is_eu_user: false,
            is_demo: false,
            is_onboarding_visited: false,
            is_first_time_visit: true,
            setIsOnboardingVisited: jest.fn(),
            setIsFirstTimeVisit: jest.fn(),
            is_real: false,
            selectRegion: jest.fn(),
            setSelectedAccount: jest.fn(),
            is_low_risk_cr_eu_real: false,
            is_real_wallets_upgrade_on: false,
            toggleWalletsUpgrade: jest.fn(),
            show_eu_related_content: false,
            platform_real_balance: {
                currency: '',
                balance: 0,
            },
            cfd_demo_balance: {
                currency: '',
                balance: 0,
            },
            platform_demo_balance: {
                currency: '',
                balance: 0,
            },
            cfd_real_balance: {
                currency: '',
                balance: 0,
            },
            closeAccountTransferModal: jest.fn(),
            toggleRegulatorsCompareModal: jest.fn(),
            is_demo_low_risk: false,
            financial_restricted_countries: false,
            selected_account_type: 'real',
            no_CR_account: false,
            no_MF_account: false,
            modal_data: {
                active_modal: '',
                data: {},
            },
            openFailedVerificationModal: jest.fn(),
            setTogglePlatformType: jest.fn(),
            toggleAccountTransferModal: jest.fn(),
            selectAccountType: jest.fn(),
            is_wallet_migration_failed: false,
            setWalletsMigrationFailedPopup: jest.fn(),
            selected_platform_type: '',
            available_platforms: [],
            selected_region: 'All',
            getExistingAccounts: jest.fn(),
            available_dxtrade_accounts: [],
            active_modal_tab: 'Deposit',
            setWalletModalActiveTab: jest.fn(),
            active_modal_wallet_id: '',
            setWalletModalActiveWalletID: jest.fn(),
            available_ctrader_accounts: [],
            has_any_real_account: false,
            startTrade: jest.fn(),
            showTopUpModal: jest.fn(),
            is_regulators_compare_modal_visible: false,
        },
        notifications: {
            addNotificationMessage: jest.fn(),
            addNotificationMessageByKey: jest.fn(),
            addTradeNotification: jest.fn(),
            client_notifications: {},
            is_notifications_empty: true,
            is_notifications_visible: false,
            filterNotificationMessages: jest.fn(),
            notifications: [],
            p2p_advertiser_info: undefined,
            p2p_completed_orders: [],
            refreshNotifications: jest.fn(),
            removeAllNotificationMessages: jest.fn(),
            removeNotifications: jest.fn(),
            removeNotificationByKey: jest.fn(),
            removeNotificationMessage: jest.fn(),
            removeNotificationMessageByKey: jest.fn(),
            removeTradeNotifications: jest.fn(),
            setP2POrderProps: jest.fn(),
            showAccountSwitchToRealNotification: jest.fn(),
            showPOAAddressMismatchSuccessNotification: jest.fn(),
            showPOAAddressMismatchFailureNotification: jest.fn(),
            setP2PRedirectTo: jest.fn(),
            setShouldShowPopups: jest.fn(),
            toggleNotificationsModal: jest.fn(),
            trade_notifications: [],
        },
        portfolio: {
            active_positions: [],
            active_positions_count: 0,
            all_positions: [],
            barriers: [],
            error: '',
            getPositionById: jest.fn(),
            is_active_empty: false,
            is_loading: false,
            is_accumulator: false,
            is_multiplier: false,
            is_turbos: false,
            onBuyResponse: jest.fn(),
            onHoverPosition: jest.fn(),
            onClickCancel: jest.fn(),
            onClickSell: jest.fn(),
            onMount: jest.fn(),
            onUnmount: jest.fn(),
            open_accu_contract: null,
            positions: [],
            removePositionById: jest.fn(),
            setContractType: jest.fn(),
        },
        contract_trade: {
            accountSwitchListener: jest.fn(),
            accu_barriers_timeout_id: null,
            accumulator_barriers_data: {},
            accumulator_contract_barriers_data: {},
            addContract: jest.fn(),
            chart_type: '',
            clearAccumulatorBarriersData: jest.fn(),
            clearError: jest.fn(),
            contracts: [],
            error_message: '',
            filtered_contracts: [],
            getContractById: jest.fn(),
            granularity: 0,
            has_crossed_accu_barriers: false,
            has_error: false,
            last_contract: {},
            markers_array: [],
            onUnmount: jest.fn(),
            prev_chart_type: '',
            prev_granularity: null,
            removeContract: jest.fn(),
            savePreviousChartMode: jest.fn(),
            setNewAccumulatorBarriersData: jest.fn(),
            updateAccumulatorBarriersData: jest.fn(),
            updateChartType: jest.fn(),
            updateGranularity: jest.fn(),
            updateProposal: jest.fn(),
        },
        modules: {
            cfd: {
                setMT5MigrationError: jest.fn(),
                migrated_mt5_accounts: [],
                mt5_migration_error: '',
                enableCFDPasswordModal: jest.fn(),
                is_sent_email_modal_enabled: false,
                setSentEmailModalStatus: jest.fn(),
                submitMt5Password: jest.fn(() => Promise.resolve()),
                setJurisdictionSelectedShortcode: jest.fn(),
                setAccountType: jest.fn(),
                setMigratedMT5Accounts: jest.fn(),
            },
            positions: {
                openContractTypeFilter: [],
                closedContractTypeFilter: [],
                timeFilter: '',
                customTimeRangeFilter: '',
                setClosedContractTypeFilter: jest.fn(),
                setOpenContractTypeFilter: jest.fn(),
                setTimeFilter: jest.fn(),
                setCustomTimeRangeFilter: jest.fn(),
            },
            markets: {
                favoriteIndicators: [],
                favoriteSymbols: [],
                removeFavoriteIndicator: jest.fn(),
                removeFavoriteSymbol: jest.fn(),
                setFavoriteIndicators: jest.fn(),
                setFavoriteSymbols: jest.fn(),
            },
            trade: {
                accumulator_range_list: [],
                active_symbols: [],
                amount: 0,
                barrier_1: '',
                barrier_2: '',
                barrier_choices: [],
                barrier_count: 1,
                barrier_pipsize: 1,
                basis: '',
                basis_list: [],
                cached_multiplier_cancellation_list: [],
                cancellation_duration: '',
                cancellation_range_list: [],
                clearContractPurchaseToastBox: jest.fn(),
                clearPurchaseInfo: jest.fn(),
                contract_expiry_type: '',
                contract_purchase_toast_box: {},
                contract_start_type: '',
                contract_type: '',
                contract_types_list: {},
                currency: '',
                duration: 0,
                duration_min_max: {},
                duration_unit: '',
                duration_units_list: [],
                expiry_date: null,
                expiry_epoch: '',
                expiry_time: null,
                expiry_type: '',
                form_components: [],
                growth_rate: 0.01,
                has_cancellation: false,
                has_equals_only: false,
                has_open_accu_contract: false,
                has_stop_loss: false,
                has_take_profit: false,
                is_accumulator: false,
                is_equal: 0,
                is_mobile_digit_view_selected: false,
                is_multiplier: false,
                is_purchase_enabled: false,
                is_trade_enabled: true,
                is_trade_params_expanded: false,
                is_turbos: false,
                is_vanilla: false,
                is_vanilla_fx: false,
                last_digit: 5,
                market_close_times: [],
                market_open_times: [],
                maximum_payout: 0,
                maximum_ticks: 0,
                multiplier: 0,
                multiplier_range_list: [],
                non_available_contract_types_list: {},
                onChange: jest.fn(),
                onChangeMultiple: jest.fn(),
                onHoverPurchase: jest.fn(),
                onPurchase: jest.fn(),
                previous_symbol: '',
                proposal_info: {},
                purchase_info: {},
                requestProposal: jest.fn(),
                resetPreviousSymbol: jest.fn(),
                sendTradeParamsAnalytics: jest.fn(),
                setHoveredBarrier: jest.fn(),
                setIsTradeParamsExpanded: jest.fn(),
                stake_boundary: {},
                start_date: 0,
                stop_loss: 0,
                symbol: '',
                take_profit: 0,
                tick_size_barrier_percentage: '',
                ticks_history_stats: {
                    ticks_stayed_in: [],
                    last_tick_epoch: 0,
                },
                trade_types: {},
                validation_errors: {},
                vanilla_trade_type: '',
            },
        },
        feature_flags: {
            data: undefined,
            update: jest.fn(),
            unmount: jest.fn(),
        },
        gtm: {
            is_gtm_applicable: false,
            visitorId: 'visitorId',
            common_variables: {
                language: 'en',
                theme: 'dark',
                platform: 'DBot',
                loggedIn: false,
            },
            accountSwitcherListener: jest.fn(),
            pushDataLayer: jest.fn(),
            pushTransactionData: jest.fn(),
            eventHandler: jest.fn(),
            setLoginFlag: jest.fn(),
        },
        pushwoosh: {},
        contract_replay: {
            contract_store: {
                accumulator_previous_spot_time: null,
                barriers_array: [],
                contract_config: {},
                contract_info: {},
                contract_update: {},
                contract_update_history: [],
                digits_info: {},
                display_status: '',
                getContractsArray: jest.fn(),
                is_digit_contract: false,
                is_ended: false,
                marker: {
                    contract_info: {},
                    epoch_array: [],
                    key: '',
                    price_array: [],
                    type: '',
                },
                markers_array: [],
            },
            chart_state: '',
            chartStateChange: jest.fn(),
            has_error: false,
            is_chart_loading: true,
            is_forward_starting: false,
            is_market_closed: false,
            is_sell_requested: false,
            onClickCancel: jest.fn(),
            onClickSell: jest.fn(),
            onMount: jest.fn(),
            onUnmount: jest.fn(),
            removeErrorMessage: jest.fn(),
            removeAccountSwitcherListener: jest.fn(),
            setAccountSwitcherListener: jest.fn(),
        },
        chart_barrier_store: {} as TCoreStores['chart_barrier_store'],
        active_symbols: {
            active_symbols: [],
            setActiveSymbols: jest.fn(),
        },
    };
};

const mockStore = (override: DeepPartial<TStores>): TStores => merge(mock(), override);

export default mockStore;
