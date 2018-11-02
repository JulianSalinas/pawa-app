import React, {Component} from 'react';

import Footer from './page-footer';
import PageRoutes from './page-routes';
import TopNavigation from './page-top';
import SideNavigation from './page-side';

import Background from "../assets/nature-1.jpg"

export default props => {

    var style = { backgroundImage: "url(" + Background + ")" };

    return (
        <div className="flexible-content"> 
            <TopNavigation/> 
            <SideNavigation/> 
            <main id="content" style={style} className="p-5"><PageRoutes/></main> 
            <Footer/> 
        </div>
    );
}

