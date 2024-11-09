import { useSelector } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectError, selectLoading } from '../../redux/auth/selectors';

export default function RegistrationPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <p>Registration new user!</p>
      {loading && <p>Registering a new user...</p>}
      {error && <p>{error}</p>}
      <RegistrationForm />
    </div>
  );
}
