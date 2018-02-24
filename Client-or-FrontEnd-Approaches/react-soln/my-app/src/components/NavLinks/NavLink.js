import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavLink.css';


const navigationItem = ( props ) => (
    <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>
        {props.children}
    </NavLink>

);

export default navigationItem;