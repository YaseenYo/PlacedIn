import React, { useEffect, useState } from 'react';
import api from "../../api/studentAPI";
import "./navbar.css";

const style = {margin : 0,position:"fixed",top: 0,width: "100%",zIndex : "1000",background:"rgb(255 255 255)"};

const StudentNavbar = ({onBurglerClick,visibility}) => {
    const [student,setStudent] = useState({});
    useEffect(()=>{
        const id = sessionStorage.getItem("studentId");
        const url = "students/" + id;
        api.get(url).then((res)=> {
            setStudent(res.data);
        })
    },[]);
    return (
        <div className = "ui secondary pointing menu" style = {style} id = "navbar">
            <div className = "item" id = "collapse">
                <i className = "bars icon" onClick = {() => onBurglerClick(!visibility)} ></i>
            </div>
            <h1 className = "header" style={{marginTop:"auto", marginBottom: "auto", marginLeft : "280px",fontFamily:"Brush Script MT"}}>
                PlacedIn
            </h1>
            <div className='right menu'>
                <img src = {student.img} className="ui avatar image profile_img"/>
            </div>
        </div>

    );
};

export default StudentNavbar;
