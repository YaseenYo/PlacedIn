import React from 'react'

export default function Post({name,date,content,usrImg}) {
    return (
        <div className="ui card" style={{marginTop:"40px"}}>
            <div className="content">
                <img className="left floated ui avatar image" src= {usrImg} />
                <div className="header">{name}</div>
                <div className="meta">
                    <i className='clock icon'></i>
                    {date}
                </div>
            </div>
            <div className="extra content" style={{color:"black", marginLeft:"20px"}}>
                {content}
            </div>
        </div>    
    )
}
