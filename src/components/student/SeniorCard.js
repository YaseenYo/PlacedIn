import React, { useContext } from 'react';

export default function SeniorCard({name,company,mail}) {
    return (
        <div className="card"> 
            <div className="content">
                <i className='left floated large user icon'></i>
                <div className="header" style={{marginLeft : "35px"}} >
                    {name}
                </div>
                <div className="description" style={{marginLeft:"35px"}}>
                    <b>Email : </b> {mail}
                </div>
            </div>
            <div className = "ui teal top right attached label">
                {company}
            </div>
        </div>
    )
}