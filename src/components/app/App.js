
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AppHeader from '../appHeader/AppHeader';
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
            <AppHeader/>
                <Routes>
                    <Route path="/" element={<Navigate to="/users" replace/>}/>
                    <Route path="/users" element={<UsersList/>}/>
                    <Route path="/login" element={<Authorization/>}/>
                    <Route path="/users" element={<UsersList/>}/>
                    <Route path="/users/:id" element={<UserCard/>}/>
                    <Route path="/tasks" element={<TasksList/>}/>
                    <Route path="/tasks/:id" element={<Timesheets/>}/>

                </Routes>
            </div>
       </Router>
    )
}

export default App;