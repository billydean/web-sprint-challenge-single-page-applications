import React from 'react';

function PizzaForm () {
    const cost = "";
    return (
        <form id="pizza-form">
            <h2>Build Your Own Pizza</h2>
            <label className ="">Choice of Size
                <p>Required</p>
                {/*dropdown*/}
            </label>
            <label className ="">Choice of Sauce
                <p>Required</p>
                {/*radio buttons*/}
            </label>
            <label className ="">Add Toppings
                <p>Choose up to 10</p>
                {/*checkmarks*/}
            </label>
            <label className ="">Substitutions
                {/* checkbox */}
            </label>
            <label className ="">Special Instructions
                {/* text */}
            </label>
            <label className ="">Name for the Order
                {/* text */}
            </label>
            <div>
                <label className ="">Quantity
                    {/* number */}
                </label>
                <p>Cost: { cost }</p>
                <button id="order-button">Add to Order</button>
            </div>
        </form>
    )
}
export default PizzaForm;