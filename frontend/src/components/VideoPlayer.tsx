import React from "react";
import YouTube from "react-youtube";

interface YoutubeProps {
  url: string
 }

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center",     // vertical center
    height: "50vh",          // full viewport height
    backgroundColor: "#000",  // optional background
  },
};
 
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
          rel: 0,            // Don't show related videos at the end
          modestbranding: 1,
        },
      };
    
      return <div style={styles.container}>
              <YouTube videoId={this.findId(this.props.url)} opts={options} onReady={this._onReady} id="video" />;
      </div>
    }
  
    _onReady(event: any) {
      event.target.pauseVideo();
    }
  }

  export default MovieClip;