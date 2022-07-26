import React from 'react'
import MenuContainer from './MenuContainer'
import SeniorCard from './SeniorCard'
import SidebarNavbarCombo from './SidebarNavbarCombo'

export default function SeniorsView() {
    return (
        <div>
            <SidebarNavbarCombo/>
            <MenuContainer>
                <div className='ui card' style={{padding:"20px"}}>
                    <div className='m-3 mb-3'>
                        <span style={{fontSize : "25px",fontWeight : "600"}}>Seniors</span>
                    </div>
                    <div className='ui cards' style={{marginLeft:"10px"}}>
                        <SeniorCard name = "Sameer Khanzada" mail = "sameer12@gmail.com"
                             company = "TCS Digital"/>
                         <SeniorCard name = "Mohammed Ali" mail = "ali@gmail.com"
                             company = "Valtech"/>
                        <SeniorCard name = "Pavitra Suma" mail = "pavi@gmail.com"
                             company = "Cognizant"/>
                        <SeniorCard name = "Fazil Ahmed" mail = "Fazil@gmail.com"
                             company = "Capgemini"/>
                        <SeniorCard name = "Mohammed Saleh" mail = "Saleh@gmail.com"
                             company = "Infosys"/>
                        <SeniorCard name = "Urvashi Rotila" mail = "ravat@gmail.com"
                            company = "Cognizant"/>
                        <SeniorCard name = "Jamiya Sultana" mail = "jamia@gmail.com"
                             company = "Capgemini"/>
                        <SeniorCard name = "Salman Pasha" mail = "sallu@gmail.com"
                             company = "Maple Labs"/>
                        <SeniorCard name = "Ruman Khanam" mail = "rumu@gmail.com"
                             company = "Infosys"/>
                        <SeniorCard name = "Owais" mail = "owais@gmail.com"
                             company = "Bosch"/>
                        <SeniorCard name = "Jamal" mail = "Jamal@gmail.com"
                             company = "Cognizant"/>
                        <SeniorCard name = "Muzafar Ahemed" mail = "muzafar@gmail.com"
                             company = "TCS Digital"/>
                    </div>
                </div>
            </MenuContainer>
        </div>
    )
}

