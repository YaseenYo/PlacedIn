import React from 'react'
import CreateTimeLineForm from './CreateTimeLineForm'
import MenuContainer from './MenuContainer'
import SidebarNavbarCombo from './SidebarNavbarCombo'

export default function CreateTimeLineView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <h2 className='mb-5'>Create Timeline</h2>
                <CreateTimeLineForm/>
            </MenuContainer>
        </div>
    )
}