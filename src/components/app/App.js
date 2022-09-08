
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Authorization from "../authorization/Authorization"
import TasksList from "../tasksList/TasksList";
import Timesheets from "../timesheets/Timesheets";
import UserCard from "../userCard/UserCard";
import UsersList from "../usersList/UsersList";

const App = () => {
    return (
        <Router>
            <Helmet>
                <meta
                    name="description"
                    content="Billing Panel"
                />
                <title>Billing Panel</title>
            </Helmet>
            <div className="app">
                <main>
                   {/* <Suspense fallback={<Spinner/>}> */}
                    <Routes>
                    
            {/* <UsersList/> */}
            {/* <UserCard/> */}
            {/* <TasksList/> */}
            {/* <Timesheets/> */}
                            {/* <Route path="/" element={<Navigate to="/characters" replace/>}/> */}
                            <Route path="/" element={<UsersList/>}/>
                            <Route path="/login" element={<Authorization/>}/>
                            <Route path="/users" element={<UsersList/>}/>
                            {/* <Route path="/users/:id" element={<SinglePage dataType='characters'/>}/> */}
                            <Route path="/tasks" element={<TasksList/>}/>
                            <Route path="/tasks/:id" element={<Timesheets dataType='comics'/>}/>
                            {/* <Route path="*" element={<Page404/>}/> */}
                    </Routes>
                   {/* </Suspense> */}
                </main>
            </div>
       </Router>
    )
}

export default App;