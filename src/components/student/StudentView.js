import React from 'react'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import StudentsTable from './StudentsTable'

export default function StudentView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <StudentsTable title = "Students"/>
            </MenuContainer>
        </div>
    )
}
