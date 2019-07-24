import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Request } from './Service';

 class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render(){
    
    console.log(
      Request.get('https://accounts.spotify.com/authorize?client_id=31fdcc2e6bf3461dadf4cb1886b87d3b&response_type=code&redirect_uri=http://localhost:3000/')
    );
    
    return (
      <div className="App">
        
      </div>
    );
  }  
}

export default App;

// 'https://accounts.spotify.com/authorize?client_id=31fdcc2e6bf3461dadf4cb1886b87d3b&response_type=code'