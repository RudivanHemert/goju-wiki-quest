import React from 'react';
import { useTranslation } from 'react-i18next';

const Strikes = () => {
  const { t, i18n } = useTranslation();

  const strikeTerms = i18n.t('terminology.sections.strikes-content.terms', { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string; details?: string }>;
  
  const termKeys = strikeTerms && typeof strikeTerms === 'object' ? Object.keys(strikeTerms) : [];

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">
        {t('terminology.sections.strikes-content.description')}
      </p>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.strikes-content.title', 'Strikes')}
        </div>
        <div className="px-4 py-2 bg-card">
          {termKeys.length > 0 ? (
            <ul className="list-disc pl-4 space-y-2">
              {termKeys.map(termKey => {
                const term = strikeTerms[termKey];
                if (!term) return null;
                return (
                  <li key={termKey}>
                    {term.name} {term.japanese && `(${term.japanese})`} - {term.english}
                    {term.details && <p className="text-sm text-muted-foreground pl-2">{term.details}</p>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>{t('terminology.noTermsAvailable', 'No terms available for this section.')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Strikes;