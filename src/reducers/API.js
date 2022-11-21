// data = {
//     categories: [
//         {
//             id: 1,
//             name: category1,
//             subgategories: [
//                 {
//                     name: subcategory1,
//                     images: [
//                         {
//                             id: "1",
//                             name: "template1",
//                             url: "https://picsum.photos/200/300"
//                         },
//                         {
//                             id: "2",
//                             name: "template2",
//                             url: "https://picsum.photos/201/300"
//                         },
//                     ]
//                 },
//                 {}
//             ]
//         },
//         {
//             id: 2,
//             name: category2,
//             subCategories: [
//                 {}, {}
//             ]
//         }
//     ]
// }

export const sampleAPIData = {
    data: {
        categories: [
            {
                id: 1,
                name: 'category 1',
                images: {
                    mobile: [
                        {
                            id: 1,
                            name: 'template 1',
                            price: 1.99,
                            description: 'product 1 description',
                            image_url: 'https://picsum.photos/206/300'
                        },
                        {
                            id: 2,
                            name: 'product 2',
                            price: 2.99,
                            description: 'product 2 description',
                            image_url: 'https://picsum.photos/240/300'
                        },
                        {
                            id: 3,
                            name: 'product 3',
                            price: 3.99,
                            description: 'product 3 description',
                            image_url: 'https://picsum.photos/220/300'
                        }
                    ],
                    desktop: [
                        {
                            id: 1,
                            name: 'template 1',
                            price: 1.99,
                            description: 'product 1 description',
                            image_url: 'https://picsum.photos/201/300'
                        },
                        {
                            id: 2,
                            name: 'product 2',
                            price: 2.99,
                            description: 'product 2 description',
                            image_url: 'https://picsum.photos/240/300'
                        },
                        {
                            id: 3,
                            name: 'product 3',
                            price: 3.99,
                            description: 'product 3 description',
                            image_url: 'https://picsum.photos/220/340'
                        }
                    ]
                }
            },
            {
                id: 2,
                name: 'category 2',
                images: {
                    mobile: [
                        {
                            id: 1,
                            name: 'template 1',
                            price: 1.99,
                            description: 'product 1 description',
                            image_url: 'https://picsum.photos/200/302'
                        },
                        {
                            id: 2,
                            name: 'product 2',
                            price: 2.99,
                            description: 'product 2 description',
                            image_url: 'https://picsum.photos/241/310'
                        }
                    ],
                    desktop: [
                        {
                            id: 1,
                            name: 'template 1',
                            price: 1.99,
                            description: 'product 1 description',
                            image_url: 'https://picsum.photos/200/300'
                        },
                        {
                            id: 2,
                            name: 'product 2',
                            price: 2.99,
                            description: 'product 2 description',
                            image_url: 'https://picsum.photos/220/301'
                        }
                    ]
                }
            }
        ]
    }
}