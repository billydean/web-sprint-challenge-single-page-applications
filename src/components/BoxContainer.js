import React from 'react';
import FoodBox from './FoodBox';


function BoxContainer () {
    const restos = [
    {
        id: 1,
        name: 'Starbucks',
        misc: 'Cafe - Coffee & Tea - Breakfast & Brunch',
        timeframe: '20-30 minutes',
        cost: '$3.49 Delivery Fee',
        src: 'https://tb-static.uber.com/prod/image-proc/processed_images/e7f459598be0c8c05e1ce97628b94599/445a4b2618e10f7db95d4f17a85b117d.jpeg'
    },
    {
        id: 2,
        name: 'McDonalds',
        misc: 'American - Fast Food - Burgers',
        timeframe: '15-20 minutes',
        cost: '$4.49 Delivery Fee',
        src: 'https://tb-static.uber.com/prod/image-proc/processed_images/89a75c643660cbdd6895efde70d7c0d5/445a4b2618e10f7db95d4f17a85b117d.jpeg'
    },
    {
        id: 3,
        name: 'Taco Bell',
        misc: 'Tex Mex - Fast Food',
        timeframe: '15-20 minutes',
        cost: '$4.49Delivery Fee',
        src: 'https://d1ralsognjng37.cloudfront.net/c8f6f1ea-a36d-446b-8d68-49f4b2600a87.jpeg'
    },
    {
        id:4,
        name: 'Del Taco',
        misc: 'Tex Mex - Fast Food',
        timeframe: '20-30 minutes',
        cost: '$3.49 Delivery Fee',
        src: 'https://d1ralsognjng37.cloudfront.net/edf241b0-d28b-4b12-bf72-14a31ad198e4.jpeg'
    },
    {
        id:5,
        name: 'KFC',
        misc: 'American - Fried Chicken',
        timeframe: '15-25 minutes',
        cost: '$2.99 Delivery Fee',
        src: 'https://d1ralsognjng37.cloudfront.net/3b772305-c298-42a1-a360-48b7c3fd2e6f.jpeg'
    },
    {
        id:6,
        name: 'Indian Spice Lane',
        misc: 'Indian - Dinner',
        timeframe: '30-40 minutes',
        cost: '$0.49 Delivery Fee',
        src: 'https://d1ralsognjng37.cloudfront.net/697b0da0-0741-4709-a0b3-318ec84807a8.jpeg'
    },
]
    return (
        <div>
            <h2>Food Delivery in Gotham City</h2>
            <div>
                { restos.map(rst => {
                    return <FoodBox misc={rst.misc} name={rst.name} timeframe={rst.timeframe} cost={rst.cost} src={rst.src} key={rst.id}/>
                })}
            </div>
        </div>
    )
}
export default BoxContainer;