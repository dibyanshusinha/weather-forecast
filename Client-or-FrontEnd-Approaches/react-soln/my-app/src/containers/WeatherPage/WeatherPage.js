import React, { Fragment, Component } from 'react';


import ImageOverlay from './../../components/UI/ImageOverlay/ImageOverlay';
import InfoWindow from './../../components/InfoModal/InfoWindow';

import Result from "./../../components/Weather/Result/Result"; 
import classes from './WeatherPage.css';

class WeatherPage extends Component {
  state={
      showInfoWindow : false,
      requestError : null,
      data: null,
      disabled: false,
      address: ''
  }

  showInfoWindow = (modalCurrState) => {
      this.setState({ showInfoWindow: modalCurrState });
  }

  render() {

    const handleBtn = () =>{
      this.setState((prevState) => { 
        return {
          disabled:  !prevState.disabled
        }
      });
    };

    const zipCodeHandler = (event) =>{
      this.setState({
        address : event.target.value
      });
    }

    const fetchBtnHandler = async () =>{
        //Disable button
        handleBtn();

        const zip = this.state.address.trim();

        if(/[a-z0-9][a-z0-9-]{0,10}[a-z0-9]$/i.test(zip)){
          try {
              let res = await myApirequest('GET', `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=d8c207ec1bc2b9b60b10802a68b7cda4`);

              let report =  JSON.parse(res.target.response);
              

              // if(report.target.status === 404){
              //   this.setState({ requestError:  report.target.statusText});
              // }else{
              //   if(report.target.status === 200){
              //     this.setState({ 
              //       requestError: null
              //      });
              //      console.log(typeof report.target.response);
                   
              //     report = JSON.parse(report.target.response);
              //     console.log(report);
                  
              //   }
              // }

              
              
              if(report.cod === "404"){
                this.setState({ requestError:  report.message});
              }else{
                if(report.cod === "200"){
                  this.setState({
                    requestError: null,
                    data: report.list
                  });
                }
              }

            }catch (APIERROR) {
              console.log('Api Error');
              this.setState({ requestError: "Can't connect to server " }); 
          }
        } else {
            console.log("Check zip");
            this.setState({ requestError: "Check Zip-Code and " });
        }

        

        //Enable Button
        handleBtn();
        
    }


    const myApirequest = (method, url) => {
        return new Promise( (resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        });
    }




    return (
      <Fragment>
          <ImageOverlay>
              <div className={classes.main}>
                  <div className="container">
                      <div className={["text-center", classes.white].join(' ')}>
                          <h1>Weather Information</h1>
                          <p><strong>Enter your city's Zip-code below to get a forecast for the weather.</strong>
                          </p>
                      </div>
                  </div>
                  <form>
                      <div className="form-group">
                          <input type="text" className={["form-control", classes.Smallinput].join(" ")} name="city" onChange={zipCodeHandler} placeholder="Eg. Try 40741 for London..." />
                      </div>
                      <div className={classes.SingleCenter}><button type="button" className="btn btn-success btn-lg" disabled={this.state.disabled} onClick ={fetchBtnHandler}>button</button></div>
                  </form>
                  <br/>
                  <Result data={this.state.data}  error = {this.state.requestError}></Result>
              </div>
              {this.state.showInfoWindow?<InfoWindow showInfoWindow={this.state.showInfoWindow} closeCb={this.showInfoWindow}/>:null}
          </ImageOverlay>
      </Fragment>
    );
  }
}

export default WeatherPage;