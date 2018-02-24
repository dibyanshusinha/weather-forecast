import React, { Fragment } from 'react';

import NavigationItem from './NavLink';
import classes from './NavItems.css'
const navItems = ( props ) => (
    <Fragment>
        <NavigationItem link="/" exact><i className="fa fa-home"></i><span className={classes.HiddenSmall}> Home</span></NavigationItem>
        <NavigationItem link="/link2"><i className="fa fa-file-text-o"></i><span className={classes.HiddenSmall}> OtherPage</span></NavigationItem>
    </Fragment>
);

//can be used to display selective routes
/* props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null */
/* !props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>*/

export default navItems;