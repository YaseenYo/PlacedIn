import React,{useState,useEffect} from 'react'
import Post from "../admin/Post";
import "./profilecard.css";
import api from "../../api/adminAPI";
import studentApi from "../../api/studentAPI";



export default function StudentProfileCard() {
    const [posts, setPosts] = useState([]);
    const[student,setStudent] = useState({});
    const studentName = sessionStorage.getItem("studentName");
    let list = [];

    useEffect(() =>{
        api.get("Posts").then((response) => {
            if(list.length == 0){
                response.data.map((x) => { 
                    if(x.userName === studentName){
                        list.push(x);
                    }
                });
                setPosts(list);
            }
        });

        const url = "students/" + sessionStorage.getItem("studentId");
        studentApi.get(url).then((res)=>{
            setStudent(res.data);
        });
    },[]);

    return (
        <div className="container bootstrap snippets bootdey">
            <div className='ui card' id = "profile-body">
                <div className="row">
                    <div className="profile-nav col-md-3">
                        <div>
                            <div className="user-heading round">
                                <a href="#">
                                    <img src = {student.img} alt=""/>
                                </a>
                            </div>
                            <button onClick={()=>window.location.href = "editstudentprofile"} className='btn' style={{marginLeft:"50px",marginTop:"-30px", background:"#a554c0",color:"white"}}>Edit profile</button> 
                        </div>
                    </div>
                    <div className="profile-info col-md-9">
                        <div className="panel">
                            <div className="panel-body bio-graph-info">
                                <h1>Profile</h1>
                                <div className="row">
                                    <div className="bio-row">
                                        <p><span>Name </span>: {student.name}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>USN </span>: {student.usn}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Phone </span>: {student.phone} </p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Email </span>: {student.email} </p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Branch </span>: {student.branch} </p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>10th% </span>: {student.sslc} </p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>12th% </span>: {student.puc} </p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>CGPA </span>: {student.cgpa} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 px-5 bg-light">
                <div className="py-4 px-3">
                    <h3>Recent posts</h3>
                    {posts.map((p)=>{
                        return (<Post name = "My Posts" usrImg = {p.usrImg} date = {p.postTime} likes = {p.likes} content = {p.content}  key = {p.id}/>);
                    })}
                </div>
            </div>
        </div>
    )
}
