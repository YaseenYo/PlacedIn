import React from 'react'
import CreateDriveForm from './CreateDriveForm'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'

export default function CreateDriveView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <h2 className='mb-5'>Create Drive</h2>
                <CreateDriveForm/>
            </MenuContainer>
        </div>
    )
}
