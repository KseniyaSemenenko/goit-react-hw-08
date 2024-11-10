import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/auth/selectors';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import css from './LoginPage.module.css';

export default function LoginPage() {
  const loading = useSelector(selectLoading);

  return (
    <div>
      <h2 className={css.textLogin}>Sign in to your account!</h2>
      {loading && <Loader />}
      <LoginForm />
    </div>
  );
}
