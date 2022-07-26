import React, { useEffect,useState } from 'react'
import HomePageCarousel from './HomePageCarousel'
import MenuContainer from './MenuContainer'
import Post from '../admin/Post'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import YourPost from './YourPost'
import api from "../../api/studentAPI"
import adminApi from "../../api/adminAPI"

export default function StudentHomeView() {
    const [posts, setPosts] = useState([]);
    let list = [];

    useEffect(()=>{
        const id = sessionStorage.getItem("studentId");
        if(id != null){
            const url = "/Students/" +  id;
            api.get(url).then((response)=>{
                const res = response.data;
                sessionStorage.setItem("studentName", res.name);
                sessionStorage.setItem("studentImg", res.img);
            });
        }

        adminApi.get("Posts").then((response) => {
            if(list.length == 0){
                response.data.map((x) => { 
                    list.push(x);
                });
                setPosts(list);
            }
        });
    },[]);
    
    if(sessionStorage.getItem("studentId") === null){
        window.location.href = "login";
    }
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <HomePageCarousel/>
                <YourPost/>
                <h2 style={{marginTop:"40px"}}>Here's what your connections posted</h2>
                {posts.map((p)=>{
                    let pname = p.userName;
                    if(pname === sessionStorage.getItem("studentName")){
                        pname = "My Post";
                    }
                    return (<Post name = {pname} usrImg = {p.usrImg} date = {p.postTime} likes = {p.likes} content = {p.content}  key = {p.id}/>);
                })}
            </MenuContainer>
        </div>
    )
}
