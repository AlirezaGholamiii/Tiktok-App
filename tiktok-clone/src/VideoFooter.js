import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Tiker from "react-ticker";

function VideoFooter({channel, description, song}) {
    return(
        <div className="videoFooter">
                
                <div className= "VideoFooter_text">
                    <h3>@{channel}</h3>
                    <p>{description}</p>
                        <div className="videoFooter_ticker">

                            <MusicNoteIcon className="VideoFooter_icon"/>
                            <Tiker mode="smooth">
                                {({index}) => (
                                
                                <>
                                    <p>{song} </p>
                                </>

                                )}

                            </Tiker>

                        </div>
                </div>
                <img className="videoFooter_logo" src = "https://static.thenounproject.com/png/934821-200.png" alt=""/>  
        </div>

        


    )
}

export default VideoFooter;

