import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import history from "../history";
import Sidebar from "./admin/Sidebar";
import SidebarNavbarCombo from "./admin/SidebarNavbarCombo";
import YourPost from "./admin/YourPost";
import HomeView from "./admin/HomeView";
import ProfileView from "./admin/ProfileView";
import StudentView from "./admin/StudentView";
import MessageView from "./admin/MessageView";
import StatsView from "./admin/StatsView";
import CreateDriveView from "./admin/CreateDriveView";
import ActiveDrivesView from "./admin/ActiveDrivesView";
import PreviousDrivesView from "./admin/PreviousDrivesView";
import TimelineView from "./admin/TimelineView";
import StudentHomeView from "./student/StudentHomeView";
import StudentProfileView from "./student/StudentProfileView";
import CreateTimeLineView from "./admin/CreateTimeLineView";
import EditDriveView from "./admin/EditDriveView";

const App = () => {
    return(
        <BrowserRouter history = {history}>
            <Routes>
                <Route path = "/home" exact element = {<HomeView/>}/>
                <Route path = "/profile" exact element = {<ProfileView/>}/>
                <Route path = "/createTimeLine" exact element = {<CreateTimeLineView/>}/>
                <Route path = "/students" exact element = {<StudentView/>}/>
                <Route path = "/messages" exact element = {<MessageView/>}/>
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

{/* <Route path = "/home" exact element = {<HomeView/>}/>
<Route path = "/profile" exact element = {<ProfileView/>}/>
<Route path = "/students" exact element = {<StudentView/>}/>
<Route path = "/messages" exact element = {<MessageView/>}/>
<Route path = "/stats" exact element = {<StatsView/>}/>
<Route path = "/timeline" exact element = {<TimelineView/>}/>
<Route path = "/createdrive" exact element = {<CreateDriveView/>}/>
<Route path = "/previousdrives" exact element = {<PreviousDrivesView/>}/>
<Route path = "/activedrives" exact element = {<ActiveDrivesView/>}/> */}



//Student

{/* <Route path = "/home" exact element = {<StudentHomeView/>}/>
                <Route path = "/profile" exact element = {<StudentProfileView/>}/>
                <Route path = "/messages" exact element = {<MessageView/>}/>
                <Route path = "/companies" exact element = {<StatsView/>}/>
                <Route path = "/timeline" exact element = {<TimelineView/>}/>
                <Route path = "/seniors" exact element = {<StudentView/>}/>
                <Route path = "/activedrives" exact element = {<ActiveDrivesView/>}/>
                <Route path = "/previousdrives" exact element = {<PreviousDrivesView/>}/> */}

