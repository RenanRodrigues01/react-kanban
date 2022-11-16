import "./taskItem.css"
import React, { useState } from "react";
import PropTypes from "prop-types";

function Taskitem ({ id, title, taskState, onTaskUpdate, onDeletTask }) {
    const [editing, setEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title)

    const onTitleChange = (e) =>{
        const newTitle = e.target.value;
        setEditableTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState);
    };

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            setEditing(false)
            if(editableTitle.length === 0){
                onDeletTask(id)
            }
        };
    };

    const taskStateChange = (e) =>{
        onTaskUpdate(id, title, e.target.value);
    };

    if(editing) {
        return <input type="text" value={editableTitle} onChange={onTitleChange} onKeyPress={onKeyPress}/>
    }else{
        return(
            <div>
                <div onClick={(e) => setEditing(true)}>{editableTitle}</div>
                <select onChange={taskStateChange} value={taskState}>
                    <option value="Pendente">Pendente</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Completa">Completa</option>
                </select>
            </div>
        );
    };
        
};
    

   

Taskitem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
};

export default Taskitem;