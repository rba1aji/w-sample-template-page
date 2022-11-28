import officeCharDesktop from '../assets/Greensoul_OfficeChair_desktop_view.jpg'
import officeCharMobile from '../assets/Greensoul_OfficeChair_Mobile_view.jpg'
import diomandBraceletDesktop from '../assets/Roberto Coin Princess Flower 4.22ct Malachite and 0.18ct Diamond Bracelet_Desktop_view.jpg'
import diomandBraceletMobile from '../assets/Roberto Coin Princess Flower 4.22ct Malachite and 0.18ct Diamond Bracelet_Mobile_view.jpg'
import greenBag from '../assets/small Hobo chain tote bag in green.jpg';

function tempTemplatesUrl(view, id) {
    return `https://weaveroo-test.s3.ap-south-1.amazonaws.com/weaveroo-sample-template/footwear/design${id}/${view}/footwear-design-${id}-${view}.jpg`
}

let sampleData = {
    data: {
        categories: [
            {
                id: 1,
                name: 'Watches',
                image: 'https://weaveroo-test.s3.ap-south-1.amazonaws.com/testimage/watches.png',
                templates: [
                    {
                        id: 1,
                        name: 'Template 1',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 2,
                        name: 'Template 2',
                        mobile: officeCharMobile,
                        desktop: officeCharDesktop
                    },
                    {
                        id: 3,
                        name: 'Template 3',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 4,
                        name: 'Template 4',
                        mobile: tempTemplatesUrl('mobile', 1),
                        desktop: officeCharDesktop
                    },
                    {
                        id: 8,
                        name: 'Template 5',
                        mobile: greenBag,
                        desktop: greenBag
                    },
                    {
                        id: 5,
                        name: 'Template 6',
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
                        name: 'Template 1',
                        mobile: tempTemplatesUrl('mobile', 5),
                        desktop: tempTemplatesUrl('desktop', 5)
                    },
                    {
                        id: 2,
                        name: 'Template 2',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 3,
                        name: 'Template 3',
                        mobile: tempTemplatesUrl('mobile', 3),
                        desktop: tempTemplatesUrl('desktop', 3)
                    },
                    {
                        id: 2,
                        name: 'Template 4',
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
                        name: 'Template 1',
                        mobile: officeCharMobile,
                        desktop: officeCharDesktop
                    },
                    {
                        id: 2,
                        name: 'Template 2',
                        mobile: greenBag,
                        desktop: greenBag
                    },
                    {
                        id: 3,
                        name: 'Template 3',
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 1,
                        name: 'Template 4',
                        mobile: tempTemplatesUrl('mobile', 14),
                        desktop: tempTemplatesUrl('desktop', 14)
                    },
                    {
                        id: 2,
                        name: 'Template 5',
                        mobile: tempTemplatesUrl('mobile', 15),
                        desktop: tempTemplatesUrl('desktop', 15)
                    },
                    {
                        id: 3,
                        name: 'Template 6',
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
                        name: 'Template 1',
                        mobile: tempTemplatesUrl('mobile', 4),
                        desktop: greenBag
                    },
                    {
                        id: 2,
                        name: 'Template 2',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 3,
                        name: 'Template 3',
                        mobile: tempTemplatesUrl('mobile', 6),
                        desktop: greenBag
                    },
                    {
                        id: 4,
                        name: 'Template 4',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 5,
                        name: 'Template 5',
                        mobile: tempTemplatesUrl('mobile', 7),
                        desktop: greenBag
                    },
                    {
                        id: 6,
                        name: 'Template 6',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    }
                ]
            },
            {
                id: 4,
                name: 'Jwellery',
                image: diomandBraceletDesktop,
                templates: [
                    {
                        id: 1,
                        name: 'Template 1',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 2,
                        name: 'Template 2',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 3,
                        name: 'Template 3',
                        mobile: tempTemplatesUrl('mobile', 8),
                        desktop: tempTemplatesUrl('desktop', 8)
                    },
                    {
                        id: 4,
                        name: 'Template 4',
                        mobile: tempTemplatesUrl('mobile', 9),
                        desktop: tempTemplatesUrl('desktop', 9)
                    },
                    {
                        id: 5,
                        name: 'Template 5',
                        mobile: diomandBraceletMobile,
                        desktop: diomandBraceletDesktop
                    },
                    {
                        id: 6,
                        name: 'Template 6',
                        mobile: tempTemplatesUrl('mobile', 10),
                        desktop: tempTemplatesUrl('desktop', 10)
                    }
                ]
            },
        ]
    }
}


export function sampleAPIData() {
    let data = sampleData;
    // edit footwear category to add more templates
    data.data.categories[1].templates = [];
    for (let i = 1; i < 34; i++) {
        if (i === 19) continue;
        else
            data.data.categories[1].templates.push({
                id: i,
                name: `Template ${i}`,
                mobile: tempTemplatesUrl('mobile', i),
                desktop: tempTemplatesUrl('desktop', i)
            })
    }
    return data;
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
