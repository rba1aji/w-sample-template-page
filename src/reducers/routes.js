import Categories from "../pages/Categories";
import Templates from "../pages/Templates";

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
        element: <Templates />,
        title: 'Selected Category'
    }
];