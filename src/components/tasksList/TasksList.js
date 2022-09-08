


import './tasksList.scss';

const TasksList = () => {
    return (
        <div className='tasks__list-wrapper'>
            <div className="tasks__list-search">
                <div className="form-title" style={{fontSize: 22, margin: "0 auto"}}>
                    Enter project name
                </div>
                <div className="form-group" style={{marginTop: 0}}>
                    <input 
                        id="search"
                        className="form-group-input"
                        type="text"
                        placeholder=" " />
                    <div className="form-group-cut"></div>
                    <label 
                        htmlFor="search" 
                        className="form-group-placeholder">
                            search
                    </label>
                </div>
            </div>
            <ul>
                <li className="tasks__list-item">
                    <div className="tasks__list-item-text-id">
                        2-202
                    </div>
                    <div className="tasks__list-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                    </div>
                    <div className="tasks__list-item-text">
                        Sample Project
                    </div>

                    <a href={`#`} className="btn btn-primary small">
                        Timesheets
                    </a>
                </li>
                <li className="tasks__list-item">
                    <div className="tasks__list-item-text-id">
                        2-202
                    </div>
                    <div className="tasks__list-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                    </div>
                    <div className="tasks__list-item-text">
                        Sample Project
                    </div>

                    <a href={`#`} className="btn btn-primary small">
                        Timesheets
                    </a>
                </li>
                <li className="tasks__list-item">
                    <div className="tasks__list-item-text-id">
                        2-202
                    </div>
                    <div className="tasks__list-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                    </div>
                    <div className="tasks__list-item-text">
                        Sample Project
                    </div>

                    <a href={`#`} className="btn btn-primary small">
                        Timesheets
                    </a>
                </li>
                <li className="tasks__list-item">
                    <div className="tasks__list-item-text-id">
                        2-202
                    </div>
                    <div className="tasks__list-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                    </div>
                    <div className="tasks__list-item-text">
                        Sample Project
                    </div>

                    <a href={`#`} className="btn btn-primary small">
                        Timesheets
                    </a>
                </li>
                <li className="tasks__list-item">
                    <div className="tasks__list-item-text-id">
                        2-202
                    </div>
                    <div className="tasks__list-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                    </div>
                    <div className="tasks__list-item-text">
                        Sample Project
                    </div>

                    <a href={`#`} className="btn btn-primary small">
                        Timesheets
                    </a>
                </li>
                <li className="tasks__list-item">
                    <div className="tasks__list-item-text-id">
                        2-202
                    </div>
                    <div className="tasks__list-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                    </div>
                    <div className="tasks__list-item-text">
                        Sample Project
                    </div>

                    <a href={`#`} className="btn btn-primary small">
                        Timesheets
                    </a>
                </li>
                <li className="tasks__list-item">
                    <div className="tasks__list-item-text-id">
                        2-202
                    </div>
                    <div className="tasks__list-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti?
                    </div>
                    <div className="tasks__list-item-text">
                        Sample Project
                    </div>

                    <a href={`#`} className="btn btn-primary small">
                        Timesheets
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default TasksList;