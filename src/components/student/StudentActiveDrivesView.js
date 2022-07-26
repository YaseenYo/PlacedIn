import React,{useState,useEffect} from 'react'
import DrivesList from './DrivesList'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import api from "../../api/adminAPI";
import studentApi from "../../api/studentAPI";

export default function StudentActiveDrivesView() {
    const [student,setStudent] = useState({});
    const studentId = sessionStorage.getItem("studentId");

    useEffect(() =>{
        const url = "students/" + studentId;
        studentApi.get(url).then(res => {
            setStudent(res.data);
        });
    },[]);
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <h2 className='mb-5'>Active Drives</h2>
                <DrivesList student = {student} />
            </MenuContainer>
        </div>
    )
}
