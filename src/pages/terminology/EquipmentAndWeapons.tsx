import React from 'react';
import { useTranslation } from 'react-i18next';

const EquipmentAndWeapons = () => {
  const { t } = useTranslation();
  const termsObject = t('terminology.sections.equipment-weapons-content.terms', { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string }>;
  const termsKeys = Object.keys(termsObject);

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">
        {t('terminology.sections.equipment-weapons-content.description')}
      </p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.equipment-weapons')}
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            {termsKeys.map(key => {
              const term = termsObject[key];
              return (
                <li key={key}>
                  {term.name}
                  {term.japanese && ` (${term.japanese})`}
                  {' - '}{term.english}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EquipmentAndWeapons;