'use client';

import { useEffect, useState } from 'react';
import { fetchBlockEntryData, fetchLandingPage } from '@/lib/contentful';
import HeroBlock from './blocks/HeroBlock';
import TwoColumnRow from './blocks/TwoColumnRow';
import ImageGrid from './blocks/ImageGrid';

interface BlockRendererProps {
  type: 'hero' | 'two-column' | 'image-grid';
  entryId: string;
}

export default function BlockRenderer({ type, entryId }: BlockRendererProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const result = await fetchBlockEntryData(type, entryId);
        setData(result);
      } catch (e) {
        console.error('Error fetching block data', e);
      } finally {
        setLoading(false);
      }
    }

    if (type && entryId) {
      load();
    }
  }, [type, entryId]);


  useEffect(() => {
  (async () => {
    const data = await fetchLandingPage('page-1');
    console.log('Landing Page:', data);
  })();
}, []);



  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Unable to load block: {type}</div>;
  
  switch (type) {
    case 'hero':
      return <HeroBlock data={data} />;
    case 'two-column':
      return <TwoColumnRow data={data} />;
    case 'image-grid':
      return <ImageGrid data={data} />;
    default:
      return <div>Unknown block type: {type}</div>;
  }
}
