import React from 'react'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import Timeline from './Timeline'

export default function StudentTimelineView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <Timeline/>
            </MenuContainer>
        </div>
    )
}
