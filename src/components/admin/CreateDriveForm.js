import React , {useState} from 'react'
import api from "../../api/adminAPI"

export default function CreateDriveForm() {
    const [companyName,setCompanyName] = useState("");
    const [role,setRole] = useState("");
    const [pack,setPack] = useState("");
    const [lastDate,setLastDate] = useState("");
    const [eligibility,setEligibility] = useState("");
    const [desc,setDesc] = useState("");

    const mydata = {
        "companyName": companyName,
        "package": pack,
        "role": role,
        "lastDateToApply": lastDate,
        "eligibility" : eligibility,
        "description" : desc
      };

    const createDrive = async () => {
        if(companyName === "" || role === ""|| pack === "" || lastDate === "" || eligibility === "" || desc === "" ){
            alert("Fill all the fields...");
            return;
        }

        try {
            await api.post("/companydrives",mydata);
            window.location.href = "activedrives";
          } catch (e) {
            console.log(e);
            alert("drive creation unsuccessfull!!!");
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
                <label className = "header">Last Date To Apply</label>
                <input onChange={(e) => setLastDate(e.target.value)} type = "date"/>
            </div>
            <div className = "field">
                <label className = "header">Eligibility (CGPA)</label>
                <input onChange={(e) => setEligibility(e.target.value)} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">job Description</label>
                <textarea onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <div style = {{marginBottom : "70px",marginTop:"40px"}} >
                <button onClick={()=> createDrive()} className = "ui button primary right floated">Create Drive</button>
            </div>
        </div>
    )
}
