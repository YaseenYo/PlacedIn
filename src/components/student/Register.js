import React,{ useEffect, useState } from 'react'
import api from "../../api/studentAPI";
import "./login.css"

export default function Register() {
    const [email,setEmail] = useState("");
    const [pasword,setPasword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if(email === "" || pasword === "" ){
            alert("Fill all the fields...");
            return;
        }

        try {
            const res = await api.post("Students",{});
            sessionStorage.setItem("studentId", res.data.id);

            const mydata = {
                "email" : email,
                "password" : pasword,
                "studentId" : res.data.id
            };
            await api.post("Credentials",mydata);
            window.location.href = "createstudentprofile";
        } catch (error) {
            console.log(error);
            alert("Registration unsuccessfull...");
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        window.location.href = "login";
    }

    return (
        <div>
            <div className="sidenav">
            <div className="login-main-text">
                <h1 className = "header" style={{fontSize : "60px", marginTop:"100px", marginBottom: "auto", marginLeft : "80px",fontFamily:"Brush Script MT"}}>
                    PlacedIn
                </h1>
                <p style={{marginLeft:"120px"}}>Registration Page</p>
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
                    <button onClick={(e)=>handleRegister(e)} className="btn btn-black">Register</button>
                    <button onClick={(e)=>handleLogin(e)} className='btn btn-grey'>Login</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
}
