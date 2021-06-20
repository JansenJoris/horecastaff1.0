import React from 'react';

import NavBar from '../nav/Navbar';
import Footer from '../footer/footers';


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