import "./taskList.css";
import Taskitem from "../taskItem/taskItem";
import PropTypes from "prop-types";

function TaskList ({ title, taskState, onAddTasks, tasks, onTaskUpdate, onDeletTask, onsetTask }) {
    const addTask = () =>{
        onAddTasks("nova tarefa", taskState)
    };

    return(
        <div className="TaskList">
            <div className="title"> {title}</div>
            <div className="content">
                {tasks.map((task) =>{
                    return (
                        <Taskitem
                            key={task.id}
                            id={task.id} 
                            title={task.title} 
                            taskState={task.state}
                            onTaskUpdate={onTaskUpdate}
                            onDeletTask={onDeletTask}
                            setTask={onsetTask}
                        />
                    );
                })}
            </div>
            <button onClick={addTask}>Adicionar Tarefa</button>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTasks: PropTypes.func,
    tasks: PropTypes.array.isRequired
}

export default TaskList;
