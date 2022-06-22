import React from 'react'
import ProfileCard from './ProfileCard'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import MenuContainer from './MenuContainer'


export default function ProfileView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <ProfileCard/>
            </MenuContainer>
        </div>
    )
}
