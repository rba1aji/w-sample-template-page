import Categories from "../pages/Categories";
import Category from "../pages/Category";

export const routes = [
    {
        path: '/categories',
        element: <Categories />,
        title: 'Categories'
    },
    {
        path: '/category/:categoryName',
        element: <Category />,
        title: 'Selected Category'
    }
];