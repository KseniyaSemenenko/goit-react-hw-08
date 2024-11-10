import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/auth/selectors';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import css from './LoginPage.module.css';

export default function LoginPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h2 className={css.textLogin}>Sign in to your account!</h2>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <LoginForm />
    </div>
  );
}
