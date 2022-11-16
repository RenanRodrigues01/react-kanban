import "./taskList.css";
import PropTypes from "prop-types";

function TaskList ({ title, onAddTasks, tasks }) {
    const addTask = () =>{
        console.log('função dentro do task list')
        onAddTasks("nova tarefa", "Pendente")
    }

    return(
        <div className="TaskList">
            <div className="title"> {title}</div>
            <div className="content">
                {tasks.map((task) =>{
                    return <div key={task.id}>{task.title}</div>
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
