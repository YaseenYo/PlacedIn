import React , {useState,useEffect} from 'react'
import api from "../../api/adminAPI"

export default function EditDriveForm({drive,id}) {
    const [companyName,setCompanyName] = useState("");
    const [role,setRole] = useState("");
    const [pack,setPack] = useState("");
    const [lastDate,setLastDate] = useState("");
    const [eligibility,setEligibility] = useState("");
    const [desc,setDesc] = useState("");

    useEffect(() => {
        setCompanyName(drive != null ? drive.companyName : "");
        setRole(drive != null ? drive.role : "");
        setPack(drive != null ? drive.package : "");
        setLastDate(drive != null ? drive.lastDateToApply : "");
        setEligibility(drive != null ? drive.eligibility : "");
        setDesc(drive != null ? drive.description : "");
    }, [drive]);

    const url = "/companydrives/" +  id;

    const mydata = {
        "id" : id,
        "companyName": companyName,
        "package": pack,
        "role": role,
        "lastDateToApply": lastDate,
        "eligibility" : eligibility,
        "description" : desc
    };

    const editDrive = async () => {
        if(companyName === "" || role === ""|| pack === "" || lastDate === "" || eligibility === "" || desc === "" ){
            alert("Fill all the fields...");
            return;
        }

        try {
            await api.put(url,mydata);
            window.location.href = "activedrives";
          } catch (e) {
            console.log(e);
            alert("drive update unsuccessfull!!!");
          }
    }

    return (
        <div className = "ui form" style = {{padding : "20px"}}>
            <div className = "field">
                <label className = "header">Company Name</label>
                <input onChange={(e) => setCompanyName(e.target.value)} value = {companyName} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Job Role</label>
                <input onChange={(e) => setRole(e.target.value)} value = {role} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Package offered</label>
                <input onChange={(e) => setPack(e.target.value)} value = {pack} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Last Date To Apply</label>
                <input onChange={(e) => setLastDate(e.target.value)} value = {lastDate} type = "date"/>
            </div>
            <div className = "field">
                <label className = "header">Eligibility (CGPA)</label>
                <input onChange={(e) => setEligibility(e.target.value)} value = {eligibility} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">job Description</label>
                <textarea onChange={(e) => setDesc(e.target.value)} value = {desc}/>
            </div>
            <div style = {{marginBottom : "70px",marginTop:"40px"}} >
                <button onClick={()=> editDrive()} className = "ui button primary right floated">Update Drive</button>
            </div>
        </div>
    )
}
