import { createContext, useState, useContext, useEffect } from "react";
import { sampleAPIData } from './API';

const appContext = createContext();

const AppContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [views, setViews] = useState({
        desktop: 'Desktop',
        mobile: 'Mobile',
    });
    const [selectedCategory, setSelectedCategory] = useState(sampleAPIData.data.categories[0]);
    const [selectedView, setSelectedView] = useState("desktop");
    const [selectedTemplate, setSelectedTemplate] = useState();
    const [categorySearchQuery, setCategorySearchQuery] = useState('');

    useEffect(() => {
        setCategories([]);
        sampleAPIData.data.categories.forEach((category) => {
            setCategories((prev) => [...prev, category]);
        });
    }, []);

    return (
        <appContext.Provider value={{
            categories, setCategories,
            views,
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