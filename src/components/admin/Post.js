import React from 'react'

export default function Post() {
    return (
        <div className="ui card" style={{marginTop:"40px"}}>
            <div className="content">
                <img className="left floated ui avatar image" src="sakhib.png"/>
                <div className="header">Khaleel</div>
                <div className="meta">
                    <i className='clock icon'></i>
                    14 min ago
                </div>
            </div>
            <div style={{margin:"20px"}}>
                Hello brother, Happy Holidays !!!
            </div>
            <div style={{margin:"10px"}}>
                <i className="thumbs up outline like icon"></i>
                17 likes
                <i className="comment icon" style={{marginLeft:"10px"}}></i>
                3 comments
            </div>
            <div className="extra content">
                <div className="ui large transparent left icon input">
                    <i className="heart outline icon"></i>
                    <input type="text" placeholder="Add Comment..."/>
                </div>
            </div>
        </div>    
    )
}
