import React from 'react';

function PizzaForm (props) {
    const cost = "TBD haha";
    const { values, change, submit, disabled, errors } = props;
    const update = evt => {
        const { name, value, type, checked } = evt.target;
        const useValue = type === 'checked' ? checked : value;
        change(name, useValue);
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    return (
        <form id="pizza-form" onSubmit={ onSubmit }>
            <h2>Build Your Own Pizza</h2>
            <label className ="">Choice of Size
                <p>Required</p>
                <select id="size-dropdown" name="size" onChange={ update }>
                    <option value="">--Size Options--</option>
                    <option value="11">Medium - 11"</option>
                    <option value="14">Large - 14"</option>
                    <option value="17">XLarge - 17"</option>
                </select>
            </label>
            <div className ="">Choice of Sauce
                <p>Required</p>
                <label>
                    <input 
                        name="sauce"
                        type="radio"
                        value="marinara"
                        onChange={ update }
                    />
                    Marinara
                </label>
                <label>
                    <input 
                        name="sauce"
                        type="radio"
                        value="white"
                        onChange={ update }
                    />
                    White
                </label>
                <label>
                    <input 
                        name="sauce"
                        type="radio"
                        value="pesto"
                        onChange={ update }
                    />
                    Pesto
                </label>
                <label>
                    <input 
                        name="sauce"
                        type="radio"
                        value="bbq"
                        onChange={ update }
                    />
                    BBQ
                </label>
            </div>
            <div className ="toppings">Add Toppings
                <p>Choose up to 10</p>
                <label>
                    <input
                        name="pepperoni"
                        type="checkbox"
                        checked={values.pepperoni}
                        onChange={ update }
                    />
                    Pepperoni
                </label>
                <label>
                    <input
                        name="onions"
                        type="checkbox"
                        checked={values.onions}
                        onChange={ update }
                    />
                    Onions
                </label>
                <label>
                    <input
                        name="mushrooms"
                        type="checkbox"
                        checked={values.mushrooms}
                        onChange={ update }
                    />
                    Mushrooms
                </label>
                <label>
                    <input
                        name="sausage"
                        type="checkbox"
                        checked={values.sausage}
                        onChange={ update }
                    />
                    Sausage
                </label>
                <label>
                    <input
                        name="bacon"
                        type="checkbox"
                        checked={values.bacon}
                        onChange={ update }
                    />
                    Bacon
                </label>
                <label>
                    <input
                        name="olives"
                        type="checkbox"
                        checked={values.olives}
                        onChange={ update }
                    />
                    Black Olives
                </label>
                <label>
                    <input
                        name="bellpeppers"
                        type="checkbox"
                        checked={values.bellpeppers}
                        onChange={ update }
                    />
                    Green Bell Peppers
                </label>
                <label>
                    <input
                        name="pineapple"
                        type="checkbox"
                        checked={values.pineapple}
                        onChange={ update }
                    />
                    Pineapple
                </label>
                <label>
                    <input
                        name="spinach"
                        type="checkbox"
                        checked={values.spinach}
                        onChange={ update }
                    />
                    Spinach
                </label>
                <label>
                    <input
                        name="morecheese"
                        type="checkbox"
                        checked={values.morecheese}
                        onChange={ update }
                    />
                    Extra Cheese
                </label>
            </div>
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
                <button id="order-button" disabled={ disabled }>Add to Order</button>
            </div>
        </form>
    )
}
export default PizzaForm;