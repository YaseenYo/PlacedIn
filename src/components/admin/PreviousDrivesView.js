import React from 'react'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'

export default function PreviousDrivesView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <h2 className='mb-5'>Previous Drives</h2>
            </MenuContainer>
        </div>
    )
}
