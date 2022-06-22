import React from 'react'
import Chatbox from './Chatbox'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'

export default function MessageView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <Chatbox/>
            </MenuContainer>
        </div>
    )
}
