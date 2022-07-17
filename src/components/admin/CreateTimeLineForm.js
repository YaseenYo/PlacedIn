import React, { useState } from 'react'
import api from "../../api/adminAPI"

export default function CreateTimeLineForm() {
    const [companyName,setCompanyName] = useState("");
    const [role,setRole] = useState("");
    const [pack,setPack] = useState("");
    const [lastDate,setLastDate] = useState("");

    const mydata = {
        "companyName": companyName,
        "package": pack,
        "role": role,
        "driveDate": lastDate,
      };

    const createTimeLine = async () => {
        if(companyName === "" || role === ""|| pack === "" || lastDate === ""){
            alert("Fill all the fields...");
            return;
        }

        try {
            await api.post("/timelines",mydata);
            window.location.href = "timeline";
          } catch (e) {
            console.log(e);
            alert("timeline creation unsuccessfull!!!");
          }
    }

    
    return (
        <div className = "ui form" style = {{padding : "20px"}}>
            <div className = "field">
                <label className = "header">Company Name</label>
                <input onChange={(e) => setCompanyName(e.target.value)} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Job Role</label>
                <input onChange={(e) => setRole(e.target.value)} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Package offered</label>
                <input onChange={(e) => setPack(e.target.value)} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Last Date To Register</label>
                <input onChange={(e) => setLastDate(e.target.value)} type = "date"/>
            </div>
            <div style = {{marginBottom : "70px",marginTop:"40px"}} >
                <button onClick={()=> createTimeLine() } className = "ui button primary right floated">Create Timeline</button>
            </div>
        </div>
    )
}
