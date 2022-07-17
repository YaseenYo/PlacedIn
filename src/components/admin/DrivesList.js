import React, {useState, useEffect} from 'react'
import DriveCard from './DriveCard'
import api from "../../api/adminAPI";

export default function DrivesList() {
    const [drives, setDrives] = useState([]);
    let list = [];

    useEffect(() =>{
        api.get("companydrives").then((response) => {
            if(list.length == 0){
                response.data.map((x) => { 
                    list.push(x);
                });
                setDrives(list);
            }
        });
    },[]);

    return (
        <div className="ui cards">
            {drives.map((d)=>{
                return (<DriveCard key = {d.id} id = {d.id} compName = {d.companyName} pack = {d.package} role = {d.role} 
                    eligibility = {d.eligibility} lastDate = {d.lastDateToApply} />)
            })}
        </div>
    )
}
