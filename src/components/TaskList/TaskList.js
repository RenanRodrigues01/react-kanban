import "./taskList.css";
import Taskitem from "../taskItem/taskItem";
import PropTypes from "prop-types";
import PlusIcon from "../../img/plus-svgrepo-com.svg"

function TaskList({ title, taskState, onAddTasks, tasks, onTaskUpdate, onDeletTask }) {
    const addTask = () => {
        onAddTasks("nova tarefa", taskState)
    };

    return (
        <div className="TaskList">
            <div className="title"> {title}</div>
            <div className="content">
                {tasks.map((task) => {
                    return (
                        <Taskitem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            taskState={task.state}
                            onTaskUpdate={onTaskUpdate}
                            onDeletTask={onDeletTask}
                        />
                    );
                })}
                {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}
                <button className="btn" onClick={addTask}>
                    <img src={PlusIcon} alt="plus icon" />
                    Adicionar Tarefa
                </button>
            </div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTasks: PropTypes.func,
    tasks: PropTypes.array.isRequired
}

export default TaskList;
