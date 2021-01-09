import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "./Video.css";
import VideoSidebar from "./VideoSidebar";


function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) {
    const [play, setplay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(play){
            videoRef.current.pause()
            setplay(false);
        }
        else{
            videoRef.current.play();
            setplay(true)
        }
       
    };
    
    return( 
    <div className = "video">
        
        <video 
            className="video_player" 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src={url}
        ></video>
        
        {/*<VideoFoter>*/}
        <VideoFooter channel={channel} description={description} song={song}/>
        {/*<VideoSidebar>*/}
        <VideoSidebar likes= {likes} messages={messages} shares={shares}/>
        
    </div>
    );
}

export default Video;