import { createContext, useState, useContext } from "react";
import { sampleAPIData } from './API';

const appContext = createContext();

const AppContextProvider = ({ children }) => {

    const [views, setViews] = useState({
        desktop: 'Desktop',
        mobile: 'Mobile',
    });
    const [selectedCategory, setSelectedCategory] = useState(sampleAPIData.data.categories[0]);
    const [selectedView, setSelectedView] = useState("desktop");
    const [selectedTemplate, setSelectedTemplate] = useState();

    return (
        <appContext.Provider value={{
            views,
            selectedCategory, setSelectedCategory,
            selectedView, setSelectedView,
            selectedTemplate, setSelectedTemplate
        }}>
            {children}
        </appContext.Provider>
    );
}

export default AppContextProvider;

export const AppState = () => {
    return useContext(appContext);
}