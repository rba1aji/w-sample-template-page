import Categories from "../pages/Categories";
import Category from "../pages/Category";

export const routes = [
    // {
    //     path: "/",
    //     element: null,
    //     title: "Home"
    // },
    {
        // path: '/categories',
        path: '/',
        element: <Categories />,
        title: 'Categories'
    },
    {
        path: '/category/:categoryName',
        element: <Category />,
        title: 'Selected Category'
    }
];