import React, { Fragment } from 'react';

import classes from './SideNav.css';
import Logo from './Logo/Logo';
import BackDrop from './../UI/Backdrop/Backdrop';

const sideNav = (props) => {

    let classesAttached = [classes.SideDrawer, classes.Close];
    if(props.open){
        classesAttached = [classes.SideDrawer, classes.Open];
    }

    return (
        <Fragment>
            <BackDrop show = {props.open} backDropClicked ={props.closed}/>
            <nav className = {classesAttached.join(' ')}>
                <div className = {classes.LogoContainer}>
                    <Logo />
                </div>
                <div className = {classes.MainContainer}>
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                </ul>
                </div>
            </nav>
        </Fragment>
    );
}


export default sideNav;