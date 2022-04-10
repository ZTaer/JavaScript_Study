import React, { useState, useEffect } from 'react';

// third-party
import { IntlProvider, MessageFormatElement } from 'react-intl';
import useConfig from 'hooks/useConfig';

// load locales files
const loadLocaleData = (locale: string) => {
    switch (locale) {
        case 'fr':
            return import('utils/locales/fr.json');
        case 'ro':
            return import('utils/locales/ro.json');
        case 'zh':
            return import('utils/locales/zh.json');
        default:
            return import('utils/locales/en.json');
    }
};

// ==============================|| LOCALIZATION ||============================== //

interface LocalsProps {
    children: React.ReactNode;
}

const Locales = ({ children }: LocalsProps) => {
    const { locale } = useConfig();
    const [messages, setMessages] = useState<Record<string, string> | Record<string, MessageFormatElement[]> | undefined>();

    useEffect(() => {
        loadLocaleData(locale).then((d: { default: Record<string, string> | Record<string, MessageFormatElement[]> | undefined }) => {
            setMessages(d.default);
        });
    }, [locale]);

    return (
        <>
            {messages && (
                <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
                    {children}
                </IntlProvider>
            )}
        </>
    );
};

export default Locales;
