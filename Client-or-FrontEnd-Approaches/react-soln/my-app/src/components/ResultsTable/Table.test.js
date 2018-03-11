import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './Table';


configure({adapter: new Adapter()})

describe('Results Dynamic Table Creation', ()=>{

  let wrapper;
  const tableDetails = {
    th: ["Date", "Main", "Weather", "Clouds", "Wind", "Rain"],
    dataTh: ["Date", "Main", "Weather", "Clouds", "Wind", "Rain"],
    sanitize : ['dt_txt','main','weather','clouds','wind','rain']
}

const data = [
  {
    "dt":1487246400,
    "main":{
      "temp":286.67,
      "temp_min":281.556,
      "temp_max":286.67,
      "pressure":972.73,
      "sea_level":1046.46,
      "grnd_level":972.73,
      "humidity":75,
      "temp_kf":5.11
    },
    "weather":[
      {"id":800,"main":"Clear","description":"clear sky","icon":"01d"}
    ],
    "clouds":{"all":0},
    "wind":{"speed":1.81,"deg":247.501},
    "sys":{"pod":"d"},
    "dt_txt":"2017-02-16 12:00:00"
  },{
    "dt":1487246400,
    "main":{
      "temp":286.67,
      "temp_min":281.556,
      "temp_max":286.67,
      "pressure":972.73,
      "sea_level":1046.46,
      "grnd_level":972.73,
      "humidity":75,
      "temp_kf":5.11
    },
    "weather":[
      {"id":800,"main":"Clear","description":"clear sky","icon":"01d"}
    ],
    "clouds":{"all":0},
    "wind":{"speed":1.81,"deg":247.501},
    "sys":{"pod":"d"},
    "dt_txt":"2017-02-16 12:00:00"
  }
];

  beforeEach(()=>{
    wrapper = shallow(<Table data={data} table={tableDetails} />);
  })



  it('should render rows based on data provided' , () =>{
    

    // wrapper.setProps({
    //   data: ...data,
    //   table: ...tableDetails
    // });

    expect(wrapper.find('tbody').children()).toHaveLength(data.length);
  });

  it('should render <th> based on data provided' , () =>{
    expect(wrapper.find('thead>tr').children()).toHaveLength(tableDetails.th.length);
  });



});
