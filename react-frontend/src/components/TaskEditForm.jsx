import React from 'react'

const TaskEditForm = ({currentTask, updateData}) => {

    const handleTaskEdit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const task = formData.get('task')
        updateData({"title" : task}, currentTask._id)
        document.querySelector('.task-edit-form-container').classList.toggle('hide-form')
    }

    return (
        <section className='task-edit-form-container hide-form'>
        <form method='post' onSubmit={handleTaskEdit}>
            <div className='input-wrapper'>
                <label htmlFor='task'>Your Task</label>
                <input name='task' id='task' defaultValue={currentTask.title} key={currentTask._id} maxLength={35}></input>
            </div>
            <button type='submit' className='submit-button'>Save Task</button>
            <button type='button' className='close-form' onClick={() => {document.querySelector('.task-edit-form-container').classList.toggle('hide-form')}}>x</button>
        </form>
    </section>
    )
}

export default TaskEditForm