import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeatherPage from './WeatherPage';
import InfoWindow from './../../components/InfoModal/InfoWindow';


configure({adapter: new Adapter()})

describe('Weather Page', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<WeatherPage />);
  })



  it('should render <InfoWindow> based on data provided' , () =>{

    wrapper.setState({ showInfoWindow: true });
    expect(wrapper.find(InfoWindow)).toHaveLength(1);
  });



});
