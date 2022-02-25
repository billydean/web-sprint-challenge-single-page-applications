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
        src: '../images/starbucks.jpeg'
    },
    {
        id: 2,
        name: 'McDonalds',
        misc: 'American - Fast Food - Burgers',
        timeframe: '15-20 minutes',
        cost: '$4.49 Delivery Fee',
        src: '../images/mcdonalds.jpeg'
    },
    {
        id: 3,
        name: 'Taco Bell',
        misc: 'Tex Mex - Fast Food',
        timeframe: '15-20 minutes',
        cost: '$4.49Delivery Fee',
        src: '../images/tacobell.jpeg'
    },
    {
        id:4,
        name: 'Del Taco',
        misc: 'Tex Mex - Fast Food',
        timeframe: '20-30 minutes',
        cost: '$3.49 Delivery Fee',
        src: '../images/deltaco.jpeg'
    },
    {
        id:5,
        name: 'KFC',
        misc: 'American - Fried Chicken',
        timeframe: '15-25 minutes',
        cost: '$2.99 Delivery Fee',
        src: '../images/kfc.jpeg'
    },
    {
        id:6,
        name: 'Indian Spice Lane',
        misc: 'Indian - Dinner',
        timeframe: '30-40 minutes',
        cost: '$0.49 Delivery Fee',
        src: '../images/indianspice.jpeg'
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