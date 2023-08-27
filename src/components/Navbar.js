import icon from "../images/icon.png"
import React, { useState } from "react";

export default function Navbar(props){
    const [filter,setfilter] = useState("");

    function check(str1,str2){
        const n = str1.length;
        const m = str2.length;
        if(n>m) return false;
        for(let i=0 ; i<=m-n ; i++){
            if(str1.localeCompare(str2.substring(i,i+n))===0) return true;
        }
        return false;
    }

    function handleChange(event){
        const str1 = event.target.value;
        setfilter(str1);
        if(str1===""){
            props.set_filtered_memes(props.memes);
        }
        else{
            const temp = props.memes.filter((e)=>{
                console.log(str1.toLowerCase());
                console.log(e.name.toLowerCase());
                console.log(check(str1.toLowerCase(),e.name.toLowerCase()));
                return check(str1.toLowerCase(),e.name.toLowerCase());
            })
            console.log(temp);
            props.set_filtered_memes(temp);
        }
    }

    return (
        <nav>
            <div>
                <img src={icon} alt="icon" />
                <h3>Memers Lab</h3>
            </div>
            {props.state===-1 && <input 
                className="searchbar"
                placeholder="Search"
                onChange={handleChange}
                value={filter}
            />}
        </nav>
    )
}