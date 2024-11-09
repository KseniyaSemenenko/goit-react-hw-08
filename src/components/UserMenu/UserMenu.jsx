import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={handleSubmit} className={css.btnUserMenu}>
        Logout
      </button>
    </div>
  );
}
