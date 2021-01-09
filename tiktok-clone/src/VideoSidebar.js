import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({likes, shares, messages}) {
    const[liked, setLike] = useState(false);
    return (
        <div className="VideoSidebar">
            <div className="VideoSidebar__button" >
                
                {liked? 
                <FavoriteIcon 
                onClick={e => setLike(false)}
                /> : <FavoriteBorderIcon 
                onClick={e => setLike(true)}
                />}

                <p>{liked ? likes + 1 : likes}</p>
                
            </div>

            <div className="VideoSidebar__button" >
                <MessageIcon />
                <p>{messages}</p>
            </div>

            <div className="VideoSidebar__button" >
                <ShareIcon />
                <p>{shares}</p>
            </div>

        </div>
    );
}

export default VideoSidebar;