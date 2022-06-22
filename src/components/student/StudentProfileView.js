import React from 'react'
import ProfileCard from './StudentProfileCard'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import MenuContainer from './MenuContainer'
import StudentProfileCard from './StudentProfileCard'


export default function StudentProfileView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <StudentProfileCard/>
            </MenuContainer>
        </div>
    )
}
