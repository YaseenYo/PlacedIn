import React from 'react'

export default function Post({name,img}) {
    return (
        <div className="ui card" style={{marginTop:"40px"}}>
            <div className="content">
                <img className="left floated ui avatar image" src= "yas.png"/>
                <div className="header">My Post</div>
                <div className="meta">
                    <i className='clock icon'></i>
                    14 min ago
                </div>
            </div>
            <div className="extra content">
                <div className="ui large transparent left icon input">
                    Hello brother, Happy Holidays !!!
                </div>
            </div>
        </div>    
    )
}
