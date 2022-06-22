import React from 'react';
import "./yourpost.css";

export default function YourPost() {
    return (
        <div className = "ui card"> 
            <div className = "content">
                <div className='ui items'>
                    <div className='item'>
                        <img className = "left floated ui avatar image user_profile" src = "monica.png" alt = "profile Photo"/>                
                        <form className="ui form">
                            <textarea placeholder="Tell us more" rows="3"></textarea>
                        </form>
                    </div>
                    <div style={{marginLeft : "40px"}}>
                        <button className="right floated ui mini button success" style={{background:"rgb(80 72 229)",color:"white"}}>post</button>
                        <i className ="image icon" style={{color:"rgb(107 114 128)"}}></i>
                        <i className='attach icon' style={{color:"rgb(107 114 128)",marginLeft:"10px"}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
