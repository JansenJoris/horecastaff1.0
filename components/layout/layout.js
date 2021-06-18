import React from 'react';

import NavBar from '../nav/Navbar';
import Footer from '../footer/Footer';


const Layout = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}


export default Layout;