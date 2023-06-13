import './styles/global.css'
import classes from './App.module.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { generateUniqueId } from './utils/generateUniqueId'
import { useRef, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import React from 'react'
import { addStickyEffect } from './utils/addStickyEffect'
import { TASKS_MOCK } from './mocks/_TASKS_MOCK'

export interface ITask {
  id: string
  description: string
  isDone: boolean
}


function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [tasks, setTasks] = useState<ITask[]>(TASKS_MOCK || [])

  React.useEffect(() => {
    addStickyEffect()
  }, [])

  function handleToggleTask (taskId: string) {
    setTasks(tasks => tasks
      .map(task => {
        if (task.id === taskId ) return { ...task, isDone: !task.isDone }
        return task
      })
    )
  }
  
  function handleDeleteTask (taskId: string) {
    setTasks(tasks => tasks.filter(task => task.id !== taskId))
  } 

  function handleCreateTask () {
    if (!inputRef.current?.value) {
      return
    }

    const newTask = {
      id: generateUniqueId(),
      description: inputRef.current.value,
      isDone: false
    }

    inputRef.current.value = ''

    setTasks(tasks => [...tasks, newTask])
  }

  return (
    <main>
      <Header />

      <div className={classes.newTaskContainer} id='newTaskContainer' >
        <div className={classes.newTaskContent} >
          <input
            className={classes.newTaskInput}
            type='text'
            tabIndex={1}
            ref={inputRef}
            placeholder='Adicione uma nova tarefa'
          />

          <button 
            onClick={handleCreateTask}
            className={classes.newTaskButton}
            tabIndex={2}
          >
            Criar
            <PlusCircle size={30} />
          </button>
        </div>
      </div>

      <div className={classes.tasksContainer}  >
        <Tasks 
          tasks={tasks} 
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask} 
        />
      </div>
    </main>
  )
}

export default App
