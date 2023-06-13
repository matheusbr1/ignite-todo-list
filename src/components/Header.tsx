import classes from './Header.module.css'

export const Header: React.FC = () => (
  <header className={classes.header} >
    <img src="./logo.svg" alt="Todo list logo" />
  </header>
)