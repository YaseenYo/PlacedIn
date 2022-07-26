import React, { useState,useEffect } from 'react';
import studentApi from "../../api/studentAPI";

export default function DriveCard({condition,drive,compName,pack,role,eligibility,lastDate,id}) {
    const [student,setStudent] = useState({});
    const studentId = sessionStorage.getItem("studentId");
    const url = "students/" + studentId;

    useEffect(() =>{
        studentApi.get(url).then(res => {
            res.data.applied.push(drive);
            setStudent(res.data);
        });

    },[]);
    
    const handleApply = async () => {
        try {
            const cgpa = parseFloat(student.cgpa);
            if(cgpa < eligibility){
                alert("you are not eligible to apply...");
                return;
            }
            await studentApi.put(url,student);
            window.location.reload();
        } catch (error) {
            console.log(error);
            alert("unsuccess...");
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
                {condition ? <div onClick={()=> handleApply()} className="right floated ui basic blue button">Apply Drive</div> 
                    : <div onClick={()=> alert("Drive Already Applied...")} className="right floated ui basic grey button">Applied</div>}
            </div>
        </div>
    )
}