import React, {useState} from 'react'
import api from "../../api/studentAPI";

export default function CreateStudentProfileForm() {
    const [name,setName] = useState("");
    const [img,setImg] = useState("");
    const [usn,setUsn] = useState("");
    const [branch,setBranch] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [sslc,setSslc] = useState("");
    const [puc,setPuc] = useState("");
    const [cgpa,setCgpa] = useState("");
    const [backlogs,setBacklogs] = useState("");

    if(sessionStorage.getItem("studentId") == null){
        window.location.href = "login";
    }

    const mydata = {
        "id" : sessionStorage.getItem("studentId"),
        "name": name,
        "usn": usn,
        "branch": branch,
        "phone": phone,
        "email": email,
        "sslc": sslc,
        "puc": puc,
        "cgpa": cgpa,
        "backlog": backlogs,
        "img": img
    };
    
    const url = "/Students/" +  sessionStorage.getItem("studentId");
    
    const createStudentProfile = async () => {
        if(name === "" || usn === ""|| phone === "" || email === "" || sslc === "" || puc === "" 
                || cgpa === "" || backlogs === "" || img === "" || branch === ""){
            alert("Fill all the fields...");
            return;
        }

        try {
            await api.put(url,mydata);
            sessionStorage.setItem("studentImg",img);
            sessionStorage.setItem("studentName",name);
            alert("Profile creation successfull");
            window.location.href = "studenthome";
          } catch (e) {
            console.log(e);
            alert("Profile creation unsuccessfull!!!");
          }
    }

    return (
        <div className = "ui form" style = {{padding : "20px"}}>
            <div className = "field">
                <label className = "header">Name</label>
                <input onChange={(e)=>setName(e.target.value)} type = "text" placeholder = "Sameer"/>
            </div>
            <div className = "field">
                <label className = "header">Image</label>
                <input onChange={(e)=>setImg(e.target.value.slice(12))} type = "file" placeholder = "img"/>
            </div>
            <div className = "fields d-flex">
                <div className = "field flex-grow-1">
                    <label>USN</label>
                    <input onChange={(e)=>setUsn(e.target.value)} type = "text" placeholder = "1DA18CS086"/>
                </div>
                <div className = "field flex-grow-1">
                    <label>Branch</label>
                    <input onChange={(e)=>setBranch(e.target.value)} type = "text" placeholder = "CSE"/>
                </div>
            </div>
            <div className = "fields d-flex">
                <div className = "field flex-grow-1">
                    <label>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type = "text" placeholder = "sameer@gmail.com"/>
                </div>
                <div className = "field flex-grow-1">
                    <label>Phone</label>
                    <input onChange={(e)=>setPhone(e.target.value)} type = "text" placeholder = "phone no"/>
                </div>
            </div>
            <div className = "fields d-flex">
                <div className = "field flex-grow-1">
                    <label>10th%</label>
                    <input onChange={(e)=>setSslc(e.target.value)} type = "text" placeholder = "%"/>
                </div>
                <div className = "field flex-grow-1">
                    <label>12th%</label>
                    <input onChange={(e)=>setPuc(e.target.value)} type = "text" placeholder = "%"/>
                </div>
                <div className = "field flex-grow-1">
                    <label>CGPA</label>
                    <input onChange={(e)=>setCgpa(e.target.value)} type = "text" placeholder = "CGPA"/>
                </div>
                <div className = "field flex-grow-1">
                    <label>Backlogs</label>
                    <input onChange={(e)=>setBacklogs(e.target.value)} type = "text" placeholder = "0"/>
                </div>
            </div>
            <div style = {{marginBottom : "70px",marginTop:"40px"}} >
                <button onClick={()=>createStudentProfile()} className = "ui button primary right floated">Submit</button>
            </div>
        </div>
    )
}

