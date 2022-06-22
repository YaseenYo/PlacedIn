import React from 'react'
import DrivesList from './DrivesList'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'

export default function ActiveDrivesView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <h2 className='mb-5'>Active Drives</h2>
                <DrivesList/>
            </MenuContainer>
        </div>
    )
}
