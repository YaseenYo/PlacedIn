import React from 'react';
import api from "../../api/adminAPI";


export default function DriveCard({compName,pack,role,eligibility,lastDate,id}) {
    const handleEdit = (e) => {
        sessionStorage.setItem("driveId", id);
        window.location.href = "editdrive";
    }

    const handleDelete = async (e) => {
        const url = "companydrives/" + id;
        try {
            await api.delete(url);
            window.location.reload();
        } catch (error) {
            console.log(error);
            alert("Deletion Unsuccessfull...");
        }
        
    }

    return (
        <div className="card">
            <div className="content">
                <i className='right floated large graduation icon'></i>
                <div className="header">
                    {compName} - {pack}LPA
                </div>
                <div className="meta">
                    {role}
                </div>
                <div className="description">
                    <b>Eligibility : </b> {eligibility} CGPA
                </div>
                <div className="description">
                    <b>Last Date : </b> {lastDate}
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div onClick={(e)=> handleEdit(e)} className="ui basic green button">Edit Drive</div>
                    <div onClick={(e)=> handleDelete(e)} className="ui basic red button">Delete Drive</div>
                </div>
            </div>
        </div>
    )
}