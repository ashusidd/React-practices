import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState("Ashraf");

    const toggleTheme = () => setTheme(t => t === "light" ? "dark" : "light");

    return (
        <AppContext.Provider value={{ theme, toggleTheme, user }}>
            {children}
        </AppContext.Provider>
    );
};