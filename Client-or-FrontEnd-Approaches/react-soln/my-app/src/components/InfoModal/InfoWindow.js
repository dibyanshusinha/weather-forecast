import React, { Component } from 'react';

import Modal from './../../components/UI/Modal/Modal';
import classes from './InfoWindow.css';

class info extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    CloseHandler = () => {
        this.props.closeCb(false);
    }

    render(){

        let modalData = null;
        if(this.props.showInfoWindow){
            modalData = (
                <Modal showBackDrop={this.props.showInfoWindow}>
                    <div className={classes.Header}>
                        <div className={classes.Title}>Info</div>
                        <a className={classes.closeBtn} onClick={this.CloseHandler}><i className="fa fa-close"></i></a>
                    </div>
                    <div className={classes.Content}>
                        
                    </div>
                    <div></div>
                </Modal>
            );
        }
        return (
            modalData
        );
    };
}

export default info;

