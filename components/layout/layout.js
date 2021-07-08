import React from 'react';

import NavBar from '../nav/Navbar';
import Footer from '../footer/footers';


const Layout = (props) => {
    return (
        <div class="bg-yellow-800 bg-opacity-60">
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}


export default Layout;