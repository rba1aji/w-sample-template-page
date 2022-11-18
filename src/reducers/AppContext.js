import { createContext, useState, useContext } from "react";
import { sampleAPIData } from './API';

const appContext = createContext();

const AppContextProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(sampleAPIData.data.categories[0]);

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