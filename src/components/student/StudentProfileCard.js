import React from 'react'
import Post from "./Post";
import "./profilecard.css";


export default function StudentProfileCard() {
    return (
        <div className="container bootstrap snippets bootdey">
                <div className="row">
                <div className="profile-nav col-md-3">
                    <div className="ui card panel">
                        <div className="user-heading round">
                            <a href="#">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                            </a>
                            <h1>Camila Smith</h1>
                            <p>deydey@theEmail.com</p>
                        </div>
                        <button className='btn btn-info'>Edit profile</button> 
                    </div>
                </div>
                <div className="profile-info col-md-9">
                    <div className="panel">
                        <div className="panel-body bio-graph-info">
                            <h1>Bio Graph</h1>
                            <div className="row">
                                <div className="bio-row">
                                    <p><span>First Name </span>: Camila</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Last Name </span>: Smith</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Country </span>: Australia</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Birthday</span>: 13 July 1983</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Occupation </span>: UI Designer</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Email </span>: jsmith@flatlab.com</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Mobile </span>: (12) 03 4567890</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Phone </span>: 88 (02) 123456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




{/*  <div classNameName="py-4 px-5 bg-light">
                         <div classNameName="py-4 px-3">
                           <h3>Recent posts</h3>
                             <Post/>
                             <Post/>
                         </div>
                     </div> */}