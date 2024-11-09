import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectError, selectLoading } from '../../redux/auth/selectors';

export default function LoginPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {loading && <p>Logging in...</p>}
      {error && <p>{error}</p>}
      <LoginForm />
    </div>
  );
}
