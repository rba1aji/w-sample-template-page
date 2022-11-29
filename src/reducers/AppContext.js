import { createContext, useState, useContext, useEffect } from "react";
import { sampleAPIData } from './API';

const appContext = createContext();

const AppContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedView, setSelectedView] = useState("desktop");
    const [selectedTemplate, setSelectedTemplate] = useState();
    const [categorySearchQuery, setCategorySearchQuery] = useState('');

    useEffect(() => {
        setCategories([]);
        sampleAPIData()?.data?.categories?.forEach((category) => {
            setCategories((prev) => [...prev, category]);
        });
    }, []);

    return (
        <appContext.Provider value={{
            categories, setCategories,
            selectedCategory, setSelectedCategory,
            selectedView, setSelectedView,
            selectedTemplate, setSelectedTemplate,
            categorySearchQuery, setCategorySearchQuery,
        }}>
            {children}
        </appContext.Provider>
    );
}

export default AppContextProvider;

export const AppState = () => {
    return useContext(appContext);
}