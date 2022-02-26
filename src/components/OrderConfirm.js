import React from 'react';

function OrderConfirm (props) {
    const pizza = {...props};

    const toppings = (pizza) => {
        const possibles = ['pepperoni','mushrooms','onions','sausage','bacon','olives','bellpeppers','pineapple','spinach','morecheese'];
        const bucket = []
        for (let each of possibles) {
            if (pizza[each] === true) {
                bucket.push(each)
            }
        }
        if (bucket.length > 1) bucket.splice(-2,0,"and");
        bucket.length > 2 ? bucket.join(", ") : bucket.join(" ");
        return bucket;
    }
    const realtops = toppings(pizza);
    return (
        <div>
            <h2>I'm so proud of you.</h2>
            <div className="pizza-dog">
                <img alt="A pizza dog" src="https://media.giphy.com/media/88P7lxjwCEvWo/giphy.gif"/>
            </div>
            <div>
                <h3>You Ordered</h3>
                <div>{`${pizza.quantity} ${pizza.size} inch `}{pizza.quantity > 1 ? "pizzas" : "pizza"}{` with ${pizza.sauce} sauce, and the following toppings: ${ realtops }.`}</div>
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