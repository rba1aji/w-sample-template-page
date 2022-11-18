// data{} -> categories[]            --> categories folders
// category[i] -> images[]      --> figma templates images

// data = {
//     categories: [
//         {
//             id: 1,
//             name: category1,
//             images: [
//                 {
//                     id: "1",
//                     name: "template1",
//                     url: "https://picsum.photos/200/300"
//                 },
//                 {
//                     id: "2",
//                     name: "template2",
//                     url: "https://picsum.photos/201/300"
//                 },
//             ]
//         },
//         {
//             id: 2,
//             name: category2,
//             images: [
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
                subCategories: [
                    {
                        id: 1,
                        name: 'subcategory 1',
                        images: [
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
                                image_url: 'https://picsum.photos/240/300'
                            },
                            {
                                id: 3,
                                name: 'product 3',
                                price: 3.99,
                                description: 'product 3 description',
                                image_url: 'https://picsum.photos/220/300'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'subcategory 2',
                        images: [
                            {
                                id: 4,
                                name: 'product 4',
                                price: 4.99,
                                description: 'product 4 description',
                                image_url: 'https://picsum.photos/200/301'
                            },
                            {
                                id: 5,
                                name: 'product 5',
                                price: 5.99,
                                description: 'product 5 description',
                                image_url: 'https://picsum.photos/200/300'
                            },
                            {
                                id: 6,
                                name: 'product 6',
                                price: 6.99,
                                description: 'product 6 description',
                                image_url: 'https://picsum.photos/200/302'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'category 2',
                subCategories: [
                    {
                        id: 3,
                        name: 'subcategory 3',
                        images: [
                            {
                                id: 7,
                                name: 'product 7',
                                price: 7.99,
                                description: 'product 7 description',
                                image_url: 'https://picsum.photos/200/303'
                            },
                            {
                                id: 8,
                                name: 'product 8',
                                price: 8.99,
                                description: 'product 8 description',
                                image_url: 'https://picsum.photos/205/300'
                            },
                            {
                                id: 9,
                                name: 'product 9',
                                price: 9.99,
                                description: 'product 9 description',
                                image_url: 'https://picsum.photos/200/311'
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: 'subcategory 4',
                        images: [
                            {
                                id: 10,
                                name: 'product 10',
                                price: 10.99,
                                description: 'product 10 description',
                                image_url: 'https://picsum.photos/200/300'
                            },
                            {
                                id: 11,
                                name: 'product 11',
                                price: 11.99,
                                description: 'product 11 description',
                                image_url: 'https://picsum.photos/200/300'
                            },
                            {
                                id: 12,
                                name: 'product 12',
                                price: 12.99,
                                description: 'product 12 description',
                                image_url: 'https://picsum.photos/200/300'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};


