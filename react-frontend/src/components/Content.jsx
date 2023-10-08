import React, { useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

const Content = ({tasks, fetchTasks, handleDelete, setCurrentTask, updateTaskStatus}) => {

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleEditClick = (task) => {
        setCurrentTask(task)
        document.querySelector('.task-edit-form-container').classList.toggle('hide-form')
    }

  return (
    <section className='content-container'>
        <h1 className='purple-header'>Todo app</h1>
        <div className='todo-container'>
            {tasks.length > 0 && (
                <ul className='tasks'>
                    {tasks.map(task => (
                    <li className='task' key={task._id}>
                        <div className='task-left'>
                            <p onClick={() => updateTaskStatus(task._id, task.completed)} className={`checkbox ${task.completed && 'checkbox-checked'}`}></p>
                            <p className={`task-title ${task.completed && 'task-title-checked'}`}>{task.title}</p>
                        </div>
                        <div className='task-right'>
                            <BiSolidEdit className='edit-icon' onClick={() => handleEditClick(task)}/>
                            <MdDelete onClick={() => handleDelete(task._id)} className='delete-icon'/>
                        </div>
                    </li>
                    ))} 
                </ul>
            )}

            {tasks.length === 0 && (
                <div className='empty-list-message-container'>
                    <h2>Add some tasks to get started!</h2>
                </div>
            )}
            <button className='new-task-button' onClick={() => {document.querySelector('.form-container').classList.toggle('hide-form')}}>+ New task</button>
        </div>
    </section>
  )
}

export default Content