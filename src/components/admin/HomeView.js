import React from 'react'
import MenuContainer from './MenuContainer'
import Post from './Post'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import YourPost from './YourPost'

export default function HomeView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <YourPost/>
                <h2 style={{marginTop:"40px"}}>Here's what your connections posted</h2>
                <Post/>
                <Post/>
            </MenuContainer>
        </div>
    )
}
