import { createContext, useContext, useEffect, useState } from 'react';

type Locale = 'EN' | 'KO';

interface LocaleContextProps {
	locale: Locale | null;
	toggleLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
	const [locale, setLocale] = useState<Locale | null>(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedLocale = localStorage.getItem('locale');
			if (storedLocale) {
				setLocale(storedLocale as Locale);
			} else {
				setLocale('EN');
			}
		}
	}, []);

	useEffect(() => {
		if (locale) {
			localStorage.setItem('locale', locale);
		}
	}, [locale]);

	const toggleLocale = (locale: Locale) => setLocale(locale);

	return (
		<LocaleContext.Provider value={{ locale, toggleLocale }}>
			{locale !== null ? children : null}
		</LocaleContext.Provider>
	);
};

export const useLocale = () => {
	const context = useContext(LocaleContext);
	if (!context) {
		throw new Error('useLocale must be used within a LocaleProvider');
	}
	return context;
};
