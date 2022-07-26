import React,{useState,useEffect} from 'react'
import EditStudentProfileForm from './EditStudentProfileForm'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import api from "../../api/studentAPI"


export default function EditStudentProfileView() {
    const id = sessionStorage.getItem("studentId");
    const [student, setStudent] = useState({});

    useEffect(() =>{
        const url = "students/" + id;
        api.get(url).then((response) => {
            setStudent(response.data);
        });
    },[]);

    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <h2 className='mb-5'>Edit Profile</h2>
                <EditStudentProfileForm student = {student}/>
            </MenuContainer>
        </div>
    )
}
