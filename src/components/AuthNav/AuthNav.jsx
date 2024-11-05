import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
    </div>
  );
}