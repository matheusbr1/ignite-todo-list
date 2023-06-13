import { ITask } from "./App"
import classes from './Tasks.module.css'

import { TasksHeader } from "./TasksHeader"
import { EmptyTasks } from "./EmptyTasks"
import { TaskCard } from "./TaskCard"

interface TasksProps {
  tasks: ITask[]
  onToggleTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

export const Tasks: React.FC<TasksProps> = ({ tasks, onDeleteTask, onToggleTask }) => {
  const doneTasks = tasks.filter(task => task.isDone)
  const doneTasksCount = doneTasks.length
  const allTasksCount = tasks.length

  return (
    <div className={classes.tasksContainer} >
      <TasksHeader 
        doneTasksCount={doneTasksCount}
        allTasksCount={allTasksCount}
      />

      <div>
        {!allTasksCount ? <EmptyTasks /> : (
          <div>
            {tasks.map((task, index) => (
              <TaskCard 
                position={index + 2}
                task={task} 
                key={task.id} 
                onToggleTask={onToggleTask} 
                onDeleteTask={onDeleteTask} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}