import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Blocks from './terminology/Blocks';
import Kicks from './terminology/Kicks';
import Punches from './terminology/Punches';
import Stances from './terminology/Stances';
import Strikes from './terminology/Strikes';
import Warmup from './terminology/Warmup';

const TechniquesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('techniques.title')}
        description={t('techniques.description')}
      />
      <div className="p-4">
        <Tabs defaultValue="blocks" className="w-full max-w-4xl mx-auto">
          <div className="overflow-x-auto pb-2">
            <TabsList className="w-max">
              <TabsTrigger value="blocks">{t('techniques.sections.blocks.title')}</TabsTrigger>
              <TabsTrigger value="kicks">{t('techniques.sections.kicks.title')}</TabsTrigger>
              <TabsTrigger value="punches">{t('techniques.sections.punches.title')}</TabsTrigger>
              <TabsTrigger value="stances">{t('techniques.sections.stances.title')}</TabsTrigger>
              <TabsTrigger value="strikes">{t('techniques.sections.strikes.title')}</TabsTrigger>
              <TabsTrigger value="warmup">{t('techniques.sections.warmup.title')}</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
            <TabsContent value="blocks">
              <Blocks />
            </TabsContent>
            
            <TabsContent value="kicks">
              <Kicks />
            </TabsContent>
            
            <TabsContent value="punches">
              <Punches />
            </TabsContent>
            
            <TabsContent value="stances">
              <Stances />
            </TabsContent>
            
            <TabsContent value="strikes">
              <Strikes />
            </TabsContent>
            
            <TabsContent value="warmup">
              <Warmup />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default TechniquesPage;
