import React from 'react';
import { Link } from 'react-router-dom';

function Header () {

    return (
        <header>
            <h2>BloomTech Eats</h2>
            <nav>
                <Link to="/">Home<Link/>
                <>Contact</>
            </nav>
        </header>
    )
}
export default Header;