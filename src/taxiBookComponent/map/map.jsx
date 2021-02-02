import React,{Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"




// const Map = () => {
//     return (
//         <div>
//             <GoogleMap
//                 defaultZoom={8}
//                 defaultCenter={{ lat: -34.397, lng: 150.644 }}
//                 />
//         </div>
//     );
// }

// let MyMapComponent = withScriptjs(withGoogleMap(Map))



//  export default function MyGoogleMap(){
//      return(
//          <div>
//              <MyMapComponent
             
//             //  isMarkerShown
//             googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
//         ${process.env.REACT_APP_GOOGLE_KEY}`}
//              loadingElement={<div style={{ height: `100%` }} />}
//              containerElement={<div style={{ height: `600px` }} />}
//              mapElement={<div style={{ height: `100%` }} />}
//              />

//          </div>
//      )
//  }



export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <div className='google_map_container'>

        <Map google={this.props.google}
           className='map_comp'
           style={{opacity:'none',position:'absolute',top:'0px'}}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          {/* <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow> */}
        </Map>
  </div>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBrgl8S7ZqyFzhvqmErBQKAyfCy660ugY0")
  })(MapContainer)