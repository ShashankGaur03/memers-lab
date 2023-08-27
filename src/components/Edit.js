import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";
import { Grid } from "@mui/material";

export default function Edit(props){
    const [text,textfunc] = useState([]);
    function handleClick(){
        props.statefunc(-1);
    }
    function Add(){
        textfunc(prev=>[...prev,{id:prev.length,text:""}]);
    }
    function handleChange(event){
        textfunc(prev=>{
            const temp = prev.filter((e)=>e.id!==Number(event.target.id));
            return [...temp,{id:Number(event.target.id),text:event.target.value}];
        })
    }
    const myRef = useRef();

    return(
        <div className="edit">
            <div className="memebox" ref={myRef}>
            {text.map((e)=>{
                return (
                <Draggable key={e.id}>
                <input
                    className="input" 
                    value={e.text} 
                    onChange={handleChange} 
                    id={e.id} 
                    placeholder="Add your text here" 
                    autoComplete="off" 
                />
                </Draggable>
                );
            })}
            <img className="img-edit" src={props.url} alt="edit" />
            </div>
            <br />
            <Grid container>
                <button className="add" onClick={Add}>Add textbox</button>
                <button className="btn-edit" onClick={handleClick}>Go back</button>
                <button className="download" onClick={()=>{exportComponentAsJPEG(myRef)}}>Download</button>
            </Grid>
        </div>
    );
}