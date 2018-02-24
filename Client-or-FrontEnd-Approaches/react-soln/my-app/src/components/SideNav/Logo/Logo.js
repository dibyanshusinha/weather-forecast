import React from 'react';

import AppLogo from './../../../assets/logo.svg';
import classes from './Logo.css';

const logo = (props) => (
    <div className = {classes.AppLogo}>
        <img src={AppLogo} alt = "My Wallet" />
    </div>
);

export default logo;