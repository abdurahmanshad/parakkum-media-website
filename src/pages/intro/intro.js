import React from "react";
import './intro.css';

function Intro() {
    return(
        <div>
            <div className="video-container">
                <video src='https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/intro.mov?alt=media&token=234f4fd0-5b77-4707-b04f-e511e5ddcee8' autoPlay loop muted/>
            </div>
        </div>
    );
}

export default Intro;