import React from 'react';

import classes from './ImageOverlay.css';

const overlayImage = (props) => (
    <div className={classes.ImageOverlay}>{props.children}</div>
);

export default overlayImage;