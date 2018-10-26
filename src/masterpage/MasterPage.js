import React, {Component} from 'react';

import Footer from './Footer';
import PageRoutes from './PageRoutes';
import TopNavigation from './TopNavigation';
import SideNavigation from './SideNavigation';

import Background from "../assets/backgrounds/nature-1.jpg"

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

