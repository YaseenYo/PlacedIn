import React, { useState,useEffect } from 'react';

export default function AppliedDriveCard({compName,pack,role,eligibility,lastDate}) {
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
                <div onClick={()=> alert("Drive Already Applied...")} className="right floated ui basic grey button">Applied</div>
            </div>
        </div>
    )
}