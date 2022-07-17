import React, {useState,useEffect} from 'react'
import EditDriveForm from './EditDriveForm'
import MenuContainer from './MenuContainer'
import api from "../../api/adminAPI";
import SidebarNavbarCombo from './SidebarNavbarCombo'

export default function EditDriveView() {
    const driveId = sessionStorage.getItem("driveId");
    const [activeDrive, setActiveDrive] = useState({});

    useEffect(() =>{
        api.get("companydrives").then((response) => {
            setActiveDrive(response.data.find(d => d.id === driveId));
        });
    },[]);

    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <h2 className='mb-5'>Edit Drive</h2>
                <EditDriveForm drive = {activeDrive} id = {driveId} />
            </MenuContainer>
        </div>
    )
}
