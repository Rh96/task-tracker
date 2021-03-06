import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctrors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "text": "Test 123",
      "day": "Mar 5th at 3:15pm",
      "reminder": false,
      "id": 3
    }
  ])

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: 
        !task.reminder} : task
      )
    )
  }
  
  return (
    <div className="container">
      <Header 
        onAdd={() => 
        setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  )
}

export default App