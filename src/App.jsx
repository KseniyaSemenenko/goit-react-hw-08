import ContactForm from '../src/components/ContactForm/ContactForm';
import SearchBox from '../src/components/SearchBox/SearchBox';
import ContactList from '../src/components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from "./redux/contactsOps";

import css from './App.module.css'


const App = () => {

const dispatch = useDispatch();
const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className={css.phoneBook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
