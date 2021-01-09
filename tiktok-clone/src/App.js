import React, { useEffect, useState } from "react";
import Video from "./Video";
import "./App.css";
import db from "./firebase";

function App() {
const [videos, setVideos] = useState([])

useEffect(() => {
  db.collection("Video").onSnapshot((snapshot) =>
    setVideos(snapshot.docs.map((doc) => doc.data()))
  );
}, []);

  return (
    
    <div className="App">
      

        <div className="App_videos">
          {videos.map(
            ({ url, channel, description, song, likes, messages, shares}) => (
          
            <Video
              url={url}
              channel ={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          ))}

          
        </div>  
    </div>
  );
}

export default App;
