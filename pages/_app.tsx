import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AppProvider } from '../src/services/AppContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <AppProvider value={{ isMobile, menuOpen, setMenuOpen }}>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
