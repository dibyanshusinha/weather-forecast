import React, { Fragment, Component } from 'react';

import classes from './Layout.css';
import Toolbar from './../../components/Toolbar/Toolbar';
import SideNav from './../../components/SideNav/SideNav';

class Layout extends Component{
  state = {
    showSideNav : false
  }

  sideNavCloseHandler = () =>{
    this.setState({showSideNav:false});
  }

  sideNavToggleHandler = () =>{
    this.setState((prevState) => {
      return {showSideNav: !prevState.showSideNav};
    });
  }



  render (){
    return (
      <Fragment>
        <Toolbar sideNavToggler={this.sideNavToggleHandler } />
        <SideNav 
          closed={this.sideNavCloseHandler}
          open = {this.state.showSideNav}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Fragment>
    );
  };
};


export default Layout;
