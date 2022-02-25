import React from 'react';
import { Route, Link } from 'react-router-dom';
function Banner () {

    return (
        <>
            <Route exact path="/">
                <div className="home-bg">
                    <h1>Your favorite food, delivered while coding</h1>
                    <Link to="/pizza">Pizza?</Link>
                </div>
            </Route>
            <Route path="/pizza">
                <div className="pizza-bg"></div>
            </Route>
            <Route path="/confirmed">
                <div className="confirm-bg">
                    <h1>Congrats! Pizza is on its way!</h1>
                </div>
            </Route>
            {/* div changes background depending on Route! is that possible? */}
        </>
    )
}
export default Banner;