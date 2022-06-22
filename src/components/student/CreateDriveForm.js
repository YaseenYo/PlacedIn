import React from 'react'

export default function CreateDriveForm() {
    return (
        <div className = "ui form" style = {{padding : "20px"}}>
            <div className = "field">
                <label className = "header">Company Name</label>
                <input type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Job Role</label>
                <input type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Package offered</label>
                <input type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Last Date To Register</label>
                <input type = "date"/>
            </div>
            <div className = "field">
                <label className = "header">Eligibility</label>
                <input type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">job Description</label>
                <textarea/>
            </div>
            <div style = {{marginBottom : "70px",marginTop:"40px"}} >
                <button className = "ui button primary right floated">Create Drive</button>
            </div>
        </div>
    )
}
