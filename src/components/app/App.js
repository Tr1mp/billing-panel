import Authorization from "../authorization/Authorization"
import TasksList from "../tasksList/TasksList";
import Timesheets from "../timesheets/Timesheets";
import UserCard from "../userCard/UserCard";
import UsersList from "../usersList/UsersList";

const App = () => {
    return (
        <div className="app">
            {/* <Authorization/> */}
            {/* <UsersList/> */}
            {/* <UserCard/> */}
            {/* <TasksList/> */}
            <Timesheets/>
        </div>
    )
}

export default App;