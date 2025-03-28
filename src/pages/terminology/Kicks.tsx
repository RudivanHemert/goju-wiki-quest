import React, { useState } from 'react';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';
import { motion } from 'framer-motion';

const Kicks = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const kicksMedia = mediaItems.filter(item => 
    item.tags.includes('kicks') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">Striking techniques performed with the legs and feet.</p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Basic Kicks
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Mae Geri (前蹴り) - Front Kick</li>
            <li>Yoko Geri (横蹴り) - Side Kick</li>
            <li>Mawashi Geri (回し蹴り) - Roundhouse Kick</li>
            <li>Ushiro Geri (後ろ蹴り) - Back Kick</li>
            <li>Mikazuki Geri (三日月蹴り) - Crescent Kick</li>
            <li>Kekomi (蹴込み) - Thrust Kick</li>
            <li>Keage (蹴上げ) - Snap Kick</li>
            <li>Fumikomi (踏み込み) - Stomp Kick</li>
            <li>Hiza Geri (膝蹴り) - Knee Kick</li>
            <li>Ashi Barai (足払い) - Foot Sweep</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Advanced Kicks
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Ura Mawashi Geri (裏回し蹴り) - Reverse Roundhouse Kick</li>
            <li>Ushiro Mawashi Geri (後ろ回し蹴り) - Spinning Roundhouse Kick</li>
            <li>Nidan Geri (二段蹴り) - Double Kick</li>
            <li>Tobi Geri (飛び蹴り) - Jumping Kick</li>
            <li>Gyaku Mawashi Geri (逆回し蹴り) - Reverse Roundhouse Kick</li>
            <li>Kakato Geri (踵蹴り) - Heel Kick</li>
            <li>Hiza Geri (膝蹴り) - Knee Kick</li>
            <li>Ashi Barai (足払い) - Foot Sweep</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Kicking Variations
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Jodan Geri (上段蹴り) - High Level Kick</li>
            <li>Chudan Geri (中段蹴り) - Middle Level Kick</li>
            <li>Gedan Geri (下段蹴り) - Low Level Kick</li>
            <li>Kin Geri (金的蹴り) - Groin Kick</li>
            <li>Kakato Otoshi Geri (踵落とし蹴り) - Heel Drop Kick</li>
            <li>Hiza Geri (膝蹴り) - Knee Kick</li>
            <li>Ashi Barai (足払い) - Foot Sweep</li>
          </ul>
        </div>
      </div>

      {selectedMedia && (
        <MediaManager
          mediaId={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
};

export default Kicks;