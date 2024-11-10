import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/auth/selectors';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Loader from '../../components/Loader/Loader';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  const loading = useSelector(selectLoading);

  return (
    <div>
      <h2 className={css.textRegister}>Registration new user!</h2>
      {loading && <Loader />}
      <RegistrationForm />
    </div>
  );
}
