import { createContext, useState, useContext } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <appContext.Provider value={{
            selectedCategory, setSelectedCategory
        }}>
            {children}
        </appContext.Provider>
    );
}

export default AppContextProvider;

export const AppState = () => {
    return useContext(appContext);
}