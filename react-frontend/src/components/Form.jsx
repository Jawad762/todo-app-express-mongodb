import React from 'react'

const Form = ({handlePost}) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const task = formData.get('task')
        handlePost({"title" : task})
        document.querySelector('.form-container').classList.toggle('hide-form')
        document.querySelector('input').value = ''
    }

  return (
    <section className='form-container hide-form'>
        <form method='post' onSubmit={handleSubmit}>
            <div className='input-wrapper'>
                <label htmlFor='task'>New Task</label>
                <input name='task' id='task' placeholder='Water my plants' maxLength={35}></input>
            </div>
            <button type='submit' className='submit-button'>Add Task</button>
            <button type='button' className='close-form' onClick={() => {document.querySelector('.form-container').classList.toggle('hide-form')}}>x</button>
        </form>
    </section>
  )
}

export default Form