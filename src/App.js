import './App.css';
import Navbar from './components/navbar/navbar'
import Service from './components/service/service'
import Location from './components/location./location'
import Points from './components/points/points'
import Contact from './components/contactUs/contact'
import TaxiSlider from './components/taxiSlider/taxiSlider'
import GoogleMapReact from 'google-map-react';
import  WhoAreWe from './components/whoareyou/whoareyou'
import Approach from './components/approach/approach'
import TaxtSlider from './components/homeTextSlider/hometextSlider'

import {RouterApp} from './router/router'

const AnyReactComponent = () => <div>lhkhhjjh</div>;

function App() {
  

  return (
    <div >


     <RouterApp />
    </div>
  );
}

export default App;
