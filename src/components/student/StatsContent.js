import React from 'react'
import StudentsChartCard from '../Chart/StudentsChartCard'
import StudentsTable from './StudentsTable'

export default function StatsContent() {
    return (
        <div>
            <div className="card-columns mb-5">
                <div className="card bg-primary">
                    <div className="card-body text-center">
                        <h3>Total Students</h3>
                        <p className="card-text">845</p>
                    </div>
                </div>
                <div className="card bg-warning">
                    <div className="card-body text-center">
                        <h3>Placed Students</h3>
                        <p className="card-text">560</p>
                    </div>
                </div>
                <div className="card bg-success">
                    <div className="card-body text-center">
                        <h3>Unplaced Students</h3>
                        <p className="card-text">285</p>
                    </div>
                </div>
            </div>
            <StudentsChartCard/>
            <StudentsTable title= "Selected Students"/>
            <StudentsTable title = "Unselected Students"/> 
        </div>
    )
}
