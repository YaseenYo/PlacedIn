import React from 'react'
import HomePageCarousel from './HomePageCarousel'
import MenuContainer from './MenuContainer'
import Post from './Post'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import YourPost from './YourPost'

export default function StudentHomeView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <HomePageCarousel/>
                <YourPost/>
                <h2 style={{marginTop:"40px"}}>Here's what your connections posted</h2>
                <Post name="Admin" img = "monica"/>
                <Post name="Sakhib" img = "sakhib"/>
                <Post name="Rihana" img = "rihana"/>
                <Post name="Admin" img = "monica"/>
            </MenuContainer>
        </div>
    )
}
