import React from "react";

export default function Meme(props){
    function handleClick(){
        props.statefunc(props.id);
    }

    return (
        <div className="meme">
            <img src={props.url} alt="meme" className="meme-image" />
            <button className="btn" onClick={handleClick}>Use this meme</button>
        </div>
    )
}