import React from 'react';
import { useEffect, useContext, useState } from 'react'
import TimeLineCard from "./TimeLineCard";
import api from "../../api/adminAPI";
import "./timeline.css";
import TimeLineCardR from './TimeLineCardR';


export default function Timeline() {
    const [timeline, setTimeLine] = useState([]);
    const [flag,setFlag] = useState(0);
    let list = [];

    useEffect(() =>{
        api.get("timelines").then((response) => {
            if(list.length == 0){
                response.data.map((x) => { 
                    list.push(x);
                });
                setTimeLine(list);
            }
        });
    },[flag]);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="ui card">
                        <div className="card-body">
                        <div className='ml-3' style={{marginBottom : "70px"}}>
                            <button onClick={() => { window.location.href = "createTimeLine" } } 
                                className='right floated ui button primary mr-3'>Add timeline</button>
                            <h4 className="card-title">Timeline</h4>
                            <p className="card-description">Company Drives Timeline</p>
                        </div>
                        <div className="mt-5">
                            <div className="timeline">
                                {timeline.map((t,index)=>{
                                    if(index % 2 == 0){
                                        return (<TimeLineCard key = {t.id} companyName = {t.companyName} comPackage = {t.package} 
                                            role = {t.role} dateToApply = {t.driveDate}/>)
                                    }
                                    return (<TimeLineCardR key = {t.id} companyName = {t.companyName} comPackage = {t.package} 
                                        role = {t.role} dateToApply = {t.driveDate}/>)
                                })}   
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
