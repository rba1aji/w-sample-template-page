import officeCharDesktop from '../assets/Greensoul_OfficeChair_desktop_view.jpg'
import officeCharMobile from '../assets/Greensoul_OfficeChair_Mobile_view.jpg'
import diomandBraceletDesktop from '../assets/Roberto Coin Princess Flower 4.22ct Malachite and 0.18ct Diamond Bracelet_Desktop_view.jpg'
import diomandBraceletMobile from '../assets/Roberto Coin Princess Flower 4.22ct Malachite and 0.18ct Diamond Bracelet_Mobile_view.jpg'
import greenBag from '../assets/small Hobo chain tote bag in green.jpg';

export const sampleAPIData = {
    data: {
        categories: [
            {
                id: 1,
                name: 'Watches',
                image: 'https://weaveroo-test.s3.ap-south-1.amazonaws.com/testimage/watches.png',
                templates: [
                    {
                        id: 1,
                        name: 'template 1',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 2,
                        name: 'product 2',
                        mobile: officeCharMobile,
                        desktop: officeCharDesktop
                    },
                    {
                        id: 3,
                        name: 'Diamond Bracelet',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 4,
                        name: 'template 4',
                        mobile: 'https://picsum.photos/206/300',
                        desktop: officeCharDesktop
                    },
                    {
                        id: 8,
                        name: 'Bag Green',
                        mobile: greenBag,
                        desktop: greenBag
                    },
                    {
                        id: 5,
                        name: 'product 5',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    }
                ]
            },
            {
                id: 2,
                name: 'Footwear',
                image: 'https://weaveroo-test.s3.ap-south-1.amazonaws.com/testimage/footwear.jpg',
                templates: [
                    {
                        id: 1,
                        name: 'template 1',
                        mobile: 'https://picsum.photos/200/302',
                        desktop: 'https://picsum.photos/200/301'
                    },
                    {
                        id: 2,
                        name: 'product 2',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 3,
                        name: 'template 4',
                        mobile: 'https://picsum.photos/200/300',
                        desktop: 'https://picsum.photos/203/300'
                    },
                    {
                        id: 2,
                        name: 'product 5',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    }
                ]
            },
            {
                id: 3,
                name: 'Furniture',
                image: 'https://weaveroo-test.s3.ap-south-1.amazonaws.com/testimage/furniture.webp',
                templates: [
                    {
                        id: 1,
                        name: 'Office Char',
                        mobile: officeCharMobile,
                        desktop: officeCharDesktop
                    },
                    {
                        id: 2,
                        name: 'product 2',
                        mobile: 'https://picsum.photos/202/301',
                        desktop: greenBag
                    },
                    {
                        id: 3,
                        name: 'product 3',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 1,
                        name: 'template 4',
                        mobile: 'https://picsum.photos/209/310',
                        desktop: 'https://picsum.photos/200/310'
                    },
                    {
                        id: 2,
                        name: 'product 5',
                        mobile: 'https://picsum.photos/200/310',
                        desktop: 'https://picsum.photos/240/319'
                    },
                    {
                        id: 3,
                        name: 'product 6',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    }
                ]
            },
            {
                id: 4,
                name: 'Bags',
                image: 'https://picsum.photos/206/300',
                templates: [
                    {
                        id: 1,
                        name: 'template 1',
                        mobile: 'https://picsum.photos/206/301',
                        desktop: greenBag
                    },
                    {
                        id: 2,
                        name: 'Diamond Bracelet',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 3,
                        name: 'product 3',
                        mobile: 'https://picsum.photos/212/301',
                        desktop: greenBag
                    },
                    {
                        id: 4,
                        name: 'template 4',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 5,
                        name: 'product 5',
                        mobile: 'https://picsum.photos/240/319',
                        desktop: 'https://picsum.photos/202/301'
                    },
                    {
                        id: 6,
                        name: 'product 6',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    }
                ]
            },
            {
                id: 4,
                name: 'Jwellery',
                image: 'https://picsum.photos/206/300',
                templates: [
                    {
                        id: 1,
                        name: 'template 1',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 2,
                        name: 'product 2',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 3,
                        name: 'product 3',
                        mobile: 'https://picsum.photos/212/301',
                        desktop: 'https://picsum.photos/204/310'
                    },
                    {
                        id: 4,
                        name: 'template 4',
                        mobile: 'https://picsum.photos/200/310',
                        desktop: 'https://picsum.photos/206/301'
                    },
                    {
                        id: 5,
                        name: 'product 5',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 6,
                        name: 'product 6',
                        mobile: 'https://picsum.photos/204/310',
                        desktop: 'https://picsum.photos/212/301'
                    }
                ]
            },
        ]
    }
}




// data = {
//     categories: [
//         {
//             name: category1,
//             templates: [
//                 {
//                     mobile:'',
//                     desktop:''
//                 },
//                 {}
//             ]
//         },
//         {
//             name: category2,
//             templates: [
//                 {}, {}
//             ]
//         }
//     ]
// }
