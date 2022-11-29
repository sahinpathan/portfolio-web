import FontPlusJakartaSans from '@/components/fonts/PlusJakartaSans';
import FontJetBrainsMono from '@/components/fonts/JetBrainsMono';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

import type { ReactNode } from 'react';

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <FontPlusJakartaSans />
      <FontJetBrainsMono />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Root;
