import React from 'react';
import { useState } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import axios from 'axios';

function MapSetter() {
    const [address, setAddress] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (value) => {
        setAddress(value)
    };

    const handleSelect = () => {
        geocodeByAddress(address)
            .then((results) => {
                getLatLng(results[0])
                    .then((data) => {
                        axios.patch('/api/patch-location', { "lat": data.lat, "long": data.long }); //add .then & .catch, this is a promise
                        setSubmitted(true);
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => console.log(error));
    };

    return (
        <div>

            {submitted ? 

                <p style={{textAlign: 'center'}}>Successfully updated location</p> : 

                <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingBottom: '30px'}}>
                    <input
                      {...getInputProps({
                        placeholder: 'Enter Address ...',
                        className: 'location-search-input',
                      })}
                    />
                    <div className='autocomplete-dropdown-container'>
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            }
        </div>
    );
};

export default GoogleApiWrapper({ apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY) })(MapSetter);
