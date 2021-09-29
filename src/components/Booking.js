import React from 'react';

export class Booking extends React.Component {
    render() {
      return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: '30px'}}>
          <div id="TTE-UUID" />
        </div>
        
      );
    }
  
    componentDidMount() {
      window.TTE.init({
        targetDivId: "TTE-UUID",
        uuid: "57b33199-9d2a-4f5c-bf6d-4e529e98851a"
      });
    }
  }

  export default Booking;