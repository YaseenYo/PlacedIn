import React from 'react'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import Timeline from './Timeline'

export default function TimelineView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <Timeline/>
            </MenuContainer>
        </div>
    )
}
