import React, { Component, Fragment } from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    // shouldComponentUpdate ( nextProps, nextState ) {
    //     return nextProps.showBackDrop !== this.props.showBackDrop || nextProps.children !== this.props.children;
    // }
    
    render () {
        
        return (
            <Fragment>
                <Backdrop show={this.props.showBackDrop} backDropClicked={this.props.backDropClicked}/>
                <div className={classes.Modal} style={{transform: this.props.showBackDrop ? 'translateY(0)' : 'translateY(-100vh)',opacity: this.props.showBackDrop ? '1' : '0'}}>
                        {this.props.children}
                    </div>
            </Fragment>
        )
    }
}

export default Modal;