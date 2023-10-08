import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Form from './components/form'
import axios from 'axios'
import TaskEditForm from './components/TaskEditForm'

function App() {

  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState({})

  const fetchTasks = async () => {
    try {
        const tasks = await axios.get('http://localhost:3000/tasks');
        setTasks(tasks.data)
    } catch (error) {
        console.error('Error:', error);
    }
};

const handleDelete = async (id) => {
  try {
      await axios.delete(`http://localhost:3000/tasks/${id}`)
      fetchTasks()
  } catch (err) {
      console.error(err)
  }
}

const handlePost = async (data) => {
  try {
      await axios.post('http://localhost:3000/tasks', data)
      fetchTasks()
  } catch (err) {
      console.error(err)
  }
}

const updateData = async (data, id) => {
  try {
    await axios.put(`http://localhost:3000/tasks/${id}`, data)
    fetchTasks()
  } catch (error) {
    console.error(error)
  }
}

const updateTaskStatus = async (id,status) => {
  try {
    await axios.put(`http://localhost:3000/tasks/${id}`, {completed : !status})
    fetchTasks()
  } catch (error) {
    console.error(error)
  }
}

  return (
    <main>
      <Content tasks={tasks} fetchTasks={fetchTasks} handleDelete={handleDelete} setCurrentTask={setCurrentTask} updateTaskStatus={updateTaskStatus}/>
      <Form fetchTasks={fetchTasks} handlePost={handlePost}/>
      <TaskEditForm currentTask={currentTask} updateData={updateData}/>
    </main>
  )
}

export default App
