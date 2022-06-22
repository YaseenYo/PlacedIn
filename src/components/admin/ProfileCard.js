import React from 'react'
import Post from "./Post";
import "./profilecard.css";


export default function ProfileCard() {
    return (
        <div className="row py-2 px-4">
            <div style={{width : "100%"}}>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 background_card">
                        <div className="media align-items-end profile-header ml-4">
                            <div className="profile mr-3"><img src="sakhib.png" alt="..." width="130" className="rounded mb-2 img-thumbnail"/>
                                <a href="#" className="btn btn-sm btn-block" style={{background : "#b085b8",color:"white"}}>Edit profile</a>
                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">Manuella Tarly</h4>
                                <p className="small mb-4"> <i className="fa fa-map-marker mr-2"></i>Admin</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-light p-4 d-flex justify-content-end text-center second_card">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"> <i className="fa fa-picture-o mr-1"></i>Posts</small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">845</h5><small className="text-muted"> <i className="fa fa-user-circle-o mr-1"></i>Students</small>
                            </li>
                        </ul>
                    </div>

                    <div className="py-4 px-5 bg-light">
                        <div className="py-4 px-3">
                            <h3>Recent posts</h3>
                            <Post/>
                            <Post/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
