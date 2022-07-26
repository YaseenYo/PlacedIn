import React,{useState} from 'react';
import adminApi from "../../api/adminAPI";
import "./yourpost.css";

export default function YourPost() {
    const img = sessionStorage.getItem("studentImg");
    const sname = sessionStorage.getItem("studentName");
    const [content,setContent] = useState("");

    const handleSubmit = async () => {
        const currentdate = new Date();
        const myPost = {
            "userName": sname,
            "usrImg": img,
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
            await adminApi.post("/posts",myPost);
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
                        <img className = "left floated ui avatar image user_profile" src = {img} alt = "profile Photo"/>                
                        <form className="ui form">
                            <textarea placeholder="Tell us more" onChange={(e)=> setContent(e.target.value)} rows="3"></textarea>
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
