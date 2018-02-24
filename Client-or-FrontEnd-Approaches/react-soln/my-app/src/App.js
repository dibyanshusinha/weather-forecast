import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'; 

import Layout from './hoc/Layout/Layout';
import MainPage from './containers/WeatherPage/WeatherPage';


class App extends Component {
  render() {
    return (
      
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route render = {() => <h1>Nothing found</h1>} />
          </Switch>
        </Layout>
    
    );
  }
}


    // <Redirect from to/> || this.state.Auth ? <Route></Route>: null || history.push(newRoute)

export default App;