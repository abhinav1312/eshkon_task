'use client';

import { SDKProvider } from '@contentful/react-apps-toolkit';
import LayoutBuilder from './LayoutBuilder'; // move logic into this component

export default function Page() {
  return (
    <SDKProvider>
      <LayoutBuilder />
    </SDKProvider>
  );
}
