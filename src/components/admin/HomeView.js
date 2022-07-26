import { useEffect, useContext, useState } from 'react'
import MenuContainer from './MenuContainer'
import Post from './Post'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import YourPost from './YourPost'
import api from "../../api/adminAPI";

function HomeView() {
    const [posts, setPosts] = useState([]);
    let list = [];

    useEffect(() =>{
        api.get("Posts").then((response) => {
            if(list.length == 0){
                response.data.map((x) => { 
                    list.push(x);
                });
                setPosts(list);
            }
        });
    },[]);

    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <YourPost/>
                <h2 style={{marginTop:"40px"}}>Here's what your connections posted</h2>
                {posts.map((p)=>{
                    let pname = p.userName;
                    if(pname === "Admin"){
                        pname = "My Post";
                    }
                    return (<Post name = {pname} usrImg = {p.usrImg} date = {p.postTime} likes = {p.likes} content = {p.content}  key = {p.id}/>);
                })}
            </MenuContainer>
        </div>
    )
}

export default HomeView;