import React from 'react';

import NavBar from '../nav/Navbar';
import Footer from '../footer/footer';


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