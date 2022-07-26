import React, {useState, useEffect} from 'react'
import AppliedDriveCard from "./AppliedDriveCard"

export default function AppliedDriveList({student}) {
    return (
        <div className="ui cards">
             { student.id != undefined ? student.applied.map((d)=>{
                return (<AppliedDriveCard drive = {d} key = {d.id} id = {d.id} compName = {d.companyName} pack = {d.package} role = {d.role} 
                    eligibility = {d.eligibility} lastDate = {d.lastDateToApply}/>)
            }) : null
             }
        </div>
    )
}
