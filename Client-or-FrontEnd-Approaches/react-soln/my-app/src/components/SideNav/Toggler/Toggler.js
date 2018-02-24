import React from 'react';

import classes from './Toggler.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.backDropClicked}>
        <i className="fa fa-bars"></i>
    </div>
);

export default drawerToggle;