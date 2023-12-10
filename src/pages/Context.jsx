import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={'karan'}>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider };
