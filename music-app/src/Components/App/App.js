
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Spotify from '../Util/Spotify';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       SearchResults: [],
       playlistName: "New Playlist",
       playlistTrack: []
    };

    this.seach=this.search.bind(this);
    this.addTrack =this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.removeTrackSearch=this.removeTrackSearch.bind(this);
    this.doThese=this.doThese.bind(this);

  }

  search(term){
    Spotify.search(term).then(SeachResults => {
      this.setState({SearchResults: SearchResults });
    })
  }

  addTrack(track){
    let track=this.state
  }
  
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="head-left">
          <div className="head-logo">
            <img src={ process.env.PUBLIC_URL + 'static/images/nuff_logo.png'}
                  alt="Nuff Music App Logo" width="200px" />
          </div>
          <div className="App-title">
            
          </div>
        </div>
        <div className="head-right">
          React Project - 10<br />
          React Live API calls
        </div>
      </header>
      
      <main className="container">
        <h1>Welcome! Nuff Music!</h1>       
      </main>
      <div className="App-footer">
        <div className="footer-info">
          <CopyrightSharpIcon fontSize='small' style={{marginRight: 6}} />  Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
