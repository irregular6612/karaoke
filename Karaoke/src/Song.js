import './Song.css';
import React from 'react';
import Youtube from 'react-youtube-embed';


function Song({ match }) {

  return (
    <div className="Song">

      <header></header>

      <body>
        <Youtube id={match.params.videoId}></Youtube>
      </body>
    </div>
  );
}


export default Song;
