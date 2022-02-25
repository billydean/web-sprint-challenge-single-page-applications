import React from 'react';

function FoodBox (props) {
    const { name, misc, timeframe, cost, src } = props;
    return (
        <div>
            <div className="box-image">
                <img src={ src } alt={ name }/>
            </div>
            <h3>{ name }</h3>
            <p>{ misc }</p>
            <div className="info-tag">
                <p>{ timeframe }</p>
                <p>{ cost }</p>
            </div>
        </div>
    )
}
export default FoodBox; 