import React from 'react';
import '../App.css';
import GoogleMap from '../components/GoogleMap';


function Find() {
    return (
        <div className="App" style={{ padding: '1%'}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', fontFamily: 'Pacifico'}}>
            <h1>Finna-Eat Location</h1>
            </div>
        
        <GoogleMap />
        </div>
    );
};

export default Find;
