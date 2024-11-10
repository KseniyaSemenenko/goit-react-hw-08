import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';
import clsx from 'clsx';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink className={buildCssClasses} to="/login">
        Log In
      </NavLink>
      <NavLink className={buildCssClasses} to="/register">
        Register
      </NavLink>
    </div>
  );
}
