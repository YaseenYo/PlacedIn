import React, { useEffect, useState } from 'react'
import api from "../../api/studentAPI"
import "./login.css"

export default function Login() {
    const [email,setEmail] = useState("");
    const [pasword,setPasword] = useState("");
    const [cred, setCred] = useState([]);
    let list = [];

    useEffect(() =>{
        api.get("credentials").then((response) => {
            if(list.length == 0){
                response.data.map((x) => { 
                    list.push(x);
                });
                setCred(list);
            }
        });
    },[]);
    
    const handelRegister = (e) => {
        e.preventDefault();
        window.location.href = "register";
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(email === "" || pasword === "" ){
            alert("Fill all the fields...");
            return;
        }

        const res = cred.find(c => c.email == email && c.password == pasword);
        if(res != undefined){
            sessionStorage.setItem("studentId", res.studentId);
            window.location.href = "studenthome";
        }
        else{
            alert("Wrong username and Password...");
        }
    }

    return (
        <div>
            <div className="sidenav">
            <div className="login-main-text">
                <h1 className = "header" style={{fontSize : "60px", marginTop:"100px", marginBottom: "auto", marginLeft : "80px",fontFamily:"Brush Script MT"}}>
                    PlacedIn
                </h1>
                <p style={{marginLeft:"130px"}}>Login Page</p>
            </div>
        </div>
        <div className="main">
            <div className="col-md-6 col-sm-12">
                <div className="login-form">
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" placeholder="User Name"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={(e)=>setPasword(e.target.value)} type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <button onClick={(e)=>handleLogin(e)} className="btn btn-black">Login</button>
                    <button onClick={(e)=>handelRegister(e)} className='btn btn-grey'>Register</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
}
