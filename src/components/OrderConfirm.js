import React, { useState } from 'react';
import axios from 'axios';

function OrderConfirm () {
    const [order, setOrder] = useState({})
    axios.get('https://reqes.in/api/orders')
        .then(response =>{
            console.log(response);
            setOrder(response);
        })
        .catch(err => console.error(err));
    console.log(order);
    return (
        <div>
            <h2>I'm so proud of you.</h2>
            <div className="pizza-dog">
                <img alt="A pizza dog" src="https://media.giphy.com/media/88P7lxjwCEvWo/giphy.gif"/>
            </div>
        </div>
    )
}
export default OrderConfirm;

// name: "",
// size: "",
// pepperoni: false,
// mushrooms: false,
// onions: false,
// sausage: false,
// bacon: false,
// olives: false,
// bellpeppers: false,
// pineapple: false,
// spinach: false,
// morecheese: false,
// special: "",
// sauce: "",
// glutensub:false,
// quantity:""

// const placeOrder = pizzaWish => {
//     axios.post('https://reqres.in/api/orders', pizzaWish)
//       .then(() => {
//         setFormValues(initialValues);
//       })
//       .catch(err => console.error(err))