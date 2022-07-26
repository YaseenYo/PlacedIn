import React,{useState,useEffect} from 'react'
import AppliedDriveList from './AppliedDriveList';
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import studentApi from "../../api/studentAPI"

export default function AppliedDrivesView() {
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
                <h2 className='mb-5'>Applied Drives</h2>
                <AppliedDriveList student = {student} />
            </MenuContainer>
        </div>
    )
}
