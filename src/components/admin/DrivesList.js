import React from 'react'

export default function DrivesList() {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                <i className='right floated large graduation icon'></i>
                <div className="header">
                    TCS Digital - 7.7LPA
                </div>
                <div className="meta">
                    Development
                </div>
                <div className="description">
                    Elliot requested permission to view your contact details
                </div>
                </div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Edit Drive</div>
                    <div className="ui basic red button">End Drive</div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                <i className='right floated large graduation icon'></i>
                <div className="header">
                    Accenture - 4.5LPA
                </div>
                <div className="meta">
                    Internship
                </div>
                <div className="description">
                    Jenny wants to add you to the group <b>best friends</b>
                </div>
                </div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Edit Drive</div>
                    <div className="ui basic red button">End Drive</div>
                </div>
                </div>
            </div>
        </div>
    )
}
