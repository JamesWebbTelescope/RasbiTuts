import React from "react";
import YouTube from "react-youtube";

interface YoutubeProps {
  url: string
 }

 class MovieClip extends React.Component<YoutubeProps> {

      findId(url: string){
        let index_start = url.indexOf("=")+1
        let index_end = url.length
        let id = url.slice(index_start, index_end)
        console.log(id)
        return id
      }
      render() {
      const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
    
      return <YouTube videoId={this.findId(this.props.url)} opts={options} onReady={this._onReady} id="video" />;
    }
  
    _onReady(event: any) {
      event.target.pauseVideo();
    }
  }

  export default MovieClip;