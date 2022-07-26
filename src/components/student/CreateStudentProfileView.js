import React from 'react'
import CreateStudentProfileForm from './CreateStudentProfileForm'
import "./createStudentProfile.css";

export default function CreateStudentProfileView() {
    return (
        <div className='ui card' id = "createCard" style={{width:"300px"}}>
            <h1 id = "logo">PlacedIn</h1>
            <h5 style={{textAlign:"center"}}>Create Your Profile</h5>
            <CreateStudentProfileForm/>
        </div>
    )
}

