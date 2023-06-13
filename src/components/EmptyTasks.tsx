import classes from './EmptyTasks.module.css'

export const EmptyTasks: React.FC = () => (
  <div className={classes.emptyTasksContainer} >
    <img src="./clipboard.svg" alt="Prancheta" />
    
    <div className={classes.emptyTasksContent} >
      <p className="font-strong" >Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  </div>
)