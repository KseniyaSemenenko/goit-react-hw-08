import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export default function Navigation() {
  return (
    <nav className={css.navigationPage}>
      <NavLink className={css.linkPage} to="/">
        Home
      </NavLink>
      <NavLink className={css.linkPage} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
