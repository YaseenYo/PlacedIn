import React, { useState } from 'react';
import api from "../../api/adminAPI";
import "./yourpost.css";

export default function YourPost() {
    const [content,setContent] = useState("");

    const handleSubmit = async () => {
        const currentdate = new Date();
        const myPost = {
            "userName": "Admin",
            "usrImg": "monica.png",
            "postTime" : String(currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds()), 
            "content": content
        };
        if(content === ""){
            alert("No Content To Post...");
            return;
        }
        try {
            await api.post("/posts",myPost);
            window.location.reload();
        } catch (e) {
            console.log(e);
            alert("Post  unsuccessfull!!! 😱");
        }
    }

    return (
        <div className = "ui card"> 
            <div className = "content">
                <div className='ui items'>
                    <div className='item'>
                        <img className = "left floated ui avatar image user_profile" src = "monica.png" alt = "profile Photo"/>                
                        <form className="ui form">
                            <textarea placeholder="Tell us more" value={content} onChange={(e)=> setContent(e.target.value)} rows="3"></textarea>
                        </form>
                    </div>
                    <div style={{marginLeft : "40px"}}>
                        <button onClick={()=>handleSubmit()} className="right floated ui mini button success" style={{background:"rgb(80 72 229)",color:"white"}}>post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
