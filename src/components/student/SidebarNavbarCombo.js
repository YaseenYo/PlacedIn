import React,{ useState } from 'react';
import Sidebar from './StudentSidebar';
import Navbar from './StudentNavbar';
import MenuContainer from './MenuContainer';

const SidebarNavbarCombo = () => {
    const [visible,setVisible] = useState(false);
    const [windowSize,setWindowSize] = useState(window.innerWidth);

    window.onresize = () => {
        setWindowSize(window.innerWidth);
    };

    const displaySetting = (visible) || windowSize > "560" ? "" : "d-none";

    return (
        <div>
            <Navbar onBurglerClick = {setVisible} visibility = {visible}/>
            <Sidebar onClose = {setVisible} visibility = {visible} displaySetting = {displaySetting}/>
        </div>
    );
};

export default SidebarNavbarCombo;
