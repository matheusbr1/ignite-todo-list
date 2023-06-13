import classes from './TasksHeader.module.css'

interface TasksHeaderProps {
  allTasksCount: number
  doneTasksCount: number
}

export const TasksHeader: React.FC<TasksHeaderProps> = (props) => {
  return (
    <header className={classes.tasksHeader} >
      <div className={classes.tasksHeaderInfo} >
        <p className={classes.tasksCountLabelBlue} >Tarefas Criadas</p>
        <span className={classes.tasksCount} >{props.allTasksCount}</span>
      </div>

      <div className={classes.tasksHeaderInfo} >
        <p className={classes.tasksCountLabelPurple} >Tarefas Concluídas</p>
        <span className={classes.tasksCount} >{props.doneTasksCount} de {props.allTasksCount}</span>
      </div>
    </header>
  )
}