import { useSelector } from 'react-redux';
import css from './HomePage.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { RiContactsBook3Line } from 'react-icons/ri';

export default function HomePage() {
  const user = useSelector(selectUser);

  return (
    <div className={css.homePage}>
      <h1 className={css.homeText}>
        {user && user.name ? `Hello, ${user.name}!` : 'Hello!'} <br />
        This is your personal Phone Book
        <br /> <RiContactsBook3Line />
      </h1>
    </div>
  );
}
