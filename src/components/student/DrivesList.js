import React, {useState, useEffect} from 'react'
import DriveCard from './DriveCard'
import api from "../../api/adminAPI";
import studentApi from "../../api/studentAPI";

export default function DrivesList({student}) {
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
                if(student.id != undefined){
                    const res = student.applied.find(x=>x.id === d.id);
                    if(res === undefined){
                        return (<DriveCard drive = {d} key = {d.id} id = {d.id} compName = {d.companyName} pack = {d.package} role = {d.role} 
                            eligibility = {d.eligibility} lastDate = {d.lastDateToApply} condition = {true} />)
                    }
                    else{
                        return (<DriveCard drive = {d} key = {d.id} id = {d.id} compName = {d.companyName} pack = {d.package} role = {d.role} 
                            eligibility = {d.eligibility} lastDate = {d.lastDateToApply} condition = {false} />)
                    }
                }
            })}
        </div>
    )
}
