import React from 'react'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'
import StatsContent from './StatsContent'

export default function StatsView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <h2 className='mb-5'>Stats of Placements</h2>
                <StatsContent/>
            </MenuContainer>
        </div>
    )
}
