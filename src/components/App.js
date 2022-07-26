import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import history from "../history";
import HomeView from "./admin/HomeView";
import ProfileView from "./admin/ProfileView";
import StudentView from "./admin/StudentView";
import StatsView from "./admin/StatsView";
import CreateDriveView from "./admin/CreateDriveView";
import ActiveDrivesView from "./admin/ActiveDrivesView";
import TimelineView from "./admin/TimelineView";
import StudentHomeView from "./student/StudentHomeView";
import StudentProfileView from "./student/StudentProfileView";
import CreateTimeLineView from "./admin/CreateTimeLineView";
import EditDriveView from "./admin/EditDriveView";
import Login from "./student/Login";
import Register from "./student/Register";
import CreateStudentProfileView from "./student/CreateStudentProfileView";
import EditStudentProfileView from "./student/EditStudentProfileView";
import PlacementStats from "./student/PlacementStats";
import SeniorsView from "./student/SeniorsView";
import StudentTimelineView from "./student/StudentTimelineView";
import StudentActiveDrivesView from "./student/StudentActiveDrivesView";
import AppliedDrivesView from "./student/AppliedDrivesView";

const App = () => {
    return(
        <BrowserRouter history = {history}>
            <Routes>
                <Route path = "/studenthome" exact element = {<StudentHomeView/>}/>
                <Route path = "/studentprofile" exact element = {<StudentProfileView/>}/>
                <Route path = "/stats" exact element = {<PlacementStats/>}/>
                <Route path = "/login" exact element = {<Login/>}/>
                <Route path = "/createstudentprofile" exact element = {<CreateStudentProfileView/>}/>
                <Route path = "/editstudentprofile" exact element = {<EditStudentProfileView/>}/>
                <Route path = "/register" exact element = {<Register/>}/>
                <Route path = "/studenttimeline" exact element = {<StudentTimelineView/>}/>
                <Route path = "/seniors" exact element = {<SeniorsView/>}/>
                <Route path = "/studentactivedrives" exact element = {<StudentActiveDrivesView/>}/>
                <Route path = "/applieddrives" exact element = {<AppliedDrivesView/>}/> 
                
                {/* admin */}
                <Route path = "/home" exact element = {<HomeView/>}/>
                <Route path = "/profile" exact element = {<ProfileView/>}/>
                <Route path = "/createTimeLine" exact element = {<CreateTimeLineView/>}/>
                <Route path = "/students" exact element = {<StudentView/>}/>
                <Route path = "/stats" exact element = {<StatsView/>}/>
                <Route path = "/timeline" exact element = {<TimelineView/>}/>
                <Route path = "/createdrive" exact element = {<CreateDriveView/>}/>
                <Route path = "/editdrive" exact element = {<EditDriveView/>}/>
                <Route path = "/activedrives" exact element = {<ActiveDrivesView/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
























//Admin

        // <BrowserRouter history = {history}>
        //     <Routes>
        //         <Route path = "/home" exact element = {<HomeView/>}/>
        //         <Route path = "/profile" exact element = {<ProfileView/>}/>
        //         <Route path = "/createTimeLine" exact element = {<CreateTimeLineView/>}/>
        //         <Route path = "/students" exact element = {<StudentView/>}/>
        //         <Route path = "/messages" exact element = {<MessageView/>}/>
        //         <Route path = "/stats" exact element = {<StatsView/>}/>
        //         <Route path = "/timeline" exact element = {<TimelineView/>}/>
        //         <Route path = "/createdrive" exact element = {<CreateDriveView/>}/>
        //         <Route path = "/editdrive" exact element = {<EditDriveView/>}/>
        //         <Route path = "/activedrives" exact element = {<ActiveDrivesView/>}/>
        //     </Routes>
        // </BrowserRouter>



//Student

        //  <BrowserRouter history = {history}>
        //     <Routes>
        //         <Route path = "/studenthome" exact element = {<StudentHomeView/>}/>
        //         <Route path = "/studentprofile" exact element = {<StudentProfileView/>}/>
        //         <Route path = "/stats" exact element = {<PlacementStats/>}/>
        //         <Route path = "/login" exact element = {<Login/>}/>
        //         <Route path = "/createstudentprofile" exact element = {<CreateStudentProfileView/>}/>
        //         <Route path = "/editstudentprofile" exact element = {<EditStudentProfileView/>}/>
        //         <Route path = "/register" exact element = {<Register/>}/>
        //         <Route path = "/studenttimeline" exact element = {<StudentTimelineView/>}/>
        //         <Route path = "/seniors" exact element = {<SeniorsView/>}/>
        //         <Route path = "/studentactivedrives" exact element = {<StudentActiveDrivesView/>}/>
        //         <Route path = "/applieddrives" exact element = {<AppliedDrivesView/>}/> 
        //     </Routes>
        // </BrowserRouter>
