import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Spinner from '../spinner/Spinner';

const AppHeader = lazy(() => import('../appHeader/AppHeader'));
const Authorization = lazy(() => import("../authorization/Authorization"));
const TasksList = lazy(() => import("../tasksList/TasksList"));
const Timesheets = lazy(() => import("../timesheets/Timesheets"));
const UserCard = lazy(() => import("../userCard/UserCard"));
const UsersList = lazy(() => import("../usersList/UsersList"));


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
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/users" replace/>}/>
                            <Route path="/users" element={<UsersList/>}/>
                            <Route path="/login" element={<Authorization/>}/>
                            <Route path="/users/:id" element={<UserCard/>}/>
                            <Route path="/tasks" element={<TasksList/>}/>
                            <Route path="/tasks/:id" element={<Timesheets/>}/>
                            <Route path="*" element={<Navigate to="/" replace/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
       </Router>
    )
}

export default App;