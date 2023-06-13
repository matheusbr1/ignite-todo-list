import { Trash } from 'phosphor-react'
import { clsx } from 'clsx'
import classes from './TaskCard.module.css'
import { ITask } from '../App'

interface TaskCardProps {
  task: ITask
  onToggleTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
  position: number
}

export const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  onToggleTask, 
  onDeleteTask,
  position
}) => {
  return (
    <button
      id={'task' + position}
      className={classes.taskCardContainer} 
      tabIndex={position}
      onClick={() => onToggleTask(task.id)}
    >
      <input 
        className={classes.taskCardCheck}
        type="checkbox"
        checked={task.isDone}
        name={task.description}
      />
      
      <p className={clsx(
        classes.taskCardDescription,
        task.isDone && classes.taskCardDescriptionCompleted
      )} >
        {task.description}
      </p>
      
      <button 
        onClick={() => onDeleteTask(task.id)}
        className={classes.taskCardTrashButton}
        tabIndex={position + 1}
      >
        <Trash size={20} />
      </button>
    </button>
  )
}