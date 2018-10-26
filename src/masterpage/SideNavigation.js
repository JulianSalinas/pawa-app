import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem, Fa } from 'mdbreact';

var logo = require("../assets/logo.png");

const ListItem = props => 
    <ListGroupItem> 
        <Fa icon={props.icon} className="mr-3"/> {props.name} 
    </ListGroupItem>

const NavItem = props =>
    <NavLink 
        exact={props.exact} 
        to={props.to} 
        activeClassName="activeClass">
        <ListItem icon={props.icon} name={props.name}/>
    </NavLink>

const NavDashboard = props => 
    <NavItem 
        exact={true} 
        to="/"
        name={"Dashboard"} 
        icon="pie-chart"/>

const NavProfile = props => 
    <NavItem 
        to="/profile" 
        name={"Profile"} 
        icon="user"/>

const NavTables = props => 
    <NavItem
        to="/tables" 
        name={"Tables"} 
        icon="table"/>

const NavMaps = props => 
    <NavItem 
        to="/maps" 
        name={"Maps"} 
        icon="map"/>

const NavMessages = props => 
    <NavItem 
        to="/messages" 
        name={"Messages"} 
        icon="id-card"/>

const Nav404 = props => 
    <NavItem 
        to="/404" 
        name={"404"} 
        icon="exclamation"/>

const NavList = props => 
    <ListGroup className="list-group-flush">
        <NavDashboard/><NavProfile/><NavTables/>
        <NavMaps/><NavMessages/><Nav404/>
    </ListGroup>

const NavLogo = props => 
    <a className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo}/>
    </a>

export default () => 
    <div className="sidebar-fixed position-fixed">
        <NavLogo/>
        <NavList/>
    </div>