import React, { Component } from 'react';
import axios from 'axios';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
export class MapContainer extends Component {
    const
    constructor(props) {
        super(props);
        this.state = { 
            address: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            mapCenter: {
                lat: null,
                lng: null,
            }
        };
      }

      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    componentDidMount(props) {
      axios.get('/api/get-location')
      .then((res) => {
        const lat = res.data.lat;
        const long = res.data.long;
        // console.log(res)
        this.setState({
          ...this.state,
          mapCenter: {
            lat: lat,
            lng: long
          }
        });
      })
      .catch((err) => {
        console.log(err)
      })
    }
    
    render() {
      return (
          <div id="googleMap" >
              <Map google={this.props.google}
                initialCenter={{
                    lat: this.state.mapCenter.lat, 
                    lng: this.state.mapCenter.lng
                    }}
                center={{
                    lat: this.state.mapCenter.lat, 
                    lng: this.state.mapCenter.lng
                    }}
                    options={{
                        disableDefaultUI: true,
                    }}
                    containerStyle = {{
                      position: 'relative',  
                      width: '100%',
                      height: '50rem'
                    }}
                    >

                <Marker 
                    position={{
                        lat: this.state.mapCenter.lat, 
                        lng: this.state.mapCenter.lng
                    }}
                    onClick={this.onMarkerClick}
                    name={this.state.address}
                />
                <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
                
                </Map>
          </div>
        
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  })(MapContainer)