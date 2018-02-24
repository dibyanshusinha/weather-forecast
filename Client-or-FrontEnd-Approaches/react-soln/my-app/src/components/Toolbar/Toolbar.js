import React from 'react';

import classes from './Toolbar.css';
import SideNavBtn from './../SideNav/Toggler/Toggler'
import NavItems from './../NavLinks/NavItems';

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div className = {classes.AccNav}>
            <SideNavBtn backDropClicked={props.sideNavToggler}/>
            <NavItems />
            
        </div>
        
    </header>
);

export default toolbar;