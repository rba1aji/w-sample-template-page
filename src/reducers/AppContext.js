import { createContext, useState, useContext } from "react";
// import { sampleAPIData } from './API';

const appContext = createContext();

const AppContextProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedSubCategory, setSelectedSubCategory] = useState();
    const [selectedImage, setSelectedImage] = useState();

    return (
        <appContext.Provider value={{
            selectedCategory, setSelectedCategory,
            selectedSubCategory, setSelectedSubCategory,
            selectedImage, setSelectedImage
        }}>
            {children}
        </appContext.Provider>
    );
}

export default AppContextProvider;

export const AppState = () => {
    return useContext(appContext);
}