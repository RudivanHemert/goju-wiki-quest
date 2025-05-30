import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SupportedLanguage, supportedLanguages } from '@/i18n';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, vars?: Record<string, string>) => string;
  isRtl: boolean;
  loadingTranslations: boolean;
  supportedLanguages: typeof supportedLanguages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n, t: i18nT } = useTranslation();
  const [loadingTranslations, setLoadingTranslations] = useState(false);
  
  // Get current language from i18n
  const language = i18n.language as SupportedLanguage;
  
  // Determine if current language is RTL
  const isRtl = ['ar', 'he', 'fa'].includes(language);
  
  // Set language function
  const setLanguage = useCallback(async (lang: SupportedLanguage) => {
    console.log('Attempting to change language to:', lang);
    console.log('Current language:', language);
    console.log('Current localStorage value:', localStorage.getItem('i18nextLng'));
    
    if (lang === language) {
      console.log('Language unchanged - same as current');
      return;
    }
    
    setLoadingTranslations(true);
    try {
      console.log('Changing language via i18n...');
      await i18n.changeLanguage(lang);
      console.log('Language changed successfully');
      console.log('New i18n language:', i18n.language);
      console.log('New localStorage value:', localStorage.getItem('i18nextLng'));
      
      // Update HTML attributes
      document.documentElement.lang = lang;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setLoadingTranslations(false);
    }
  }, [i18n, language, isRtl]);
  
  // Wrapper for translation function
  const t = useCallback((key: string, vars?: Record<string, string>): string => {
    return i18nT(key, vars);
  }, [i18nT]);
  
  // Initialize language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng') as SupportedLanguage;
    if (savedLang && Object.keys(supportedLanguages).includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, [setLanguage]);
  
  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    isRtl,
    loadingTranslations,
    supportedLanguages
  }), [language, setLanguage, t, isRtl, loadingTranslations]);
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 