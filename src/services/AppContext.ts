import React from 'react';

interface IContext {
    isMobile: boolean;
    menuOpen: boolean;
    setMenuOpen: (value: React.SetStateAction<boolean>) => void;
}

const AppContext = React.createContext<IContext>({
    isMobile: false,
    menuOpen: false,
    setMenuOpen: () => { }
});

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;