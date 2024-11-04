import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { fetchContacts } from "../../redux/contacts/operations";

import css from './ContactsPage.module.css';

export default function ContactsPage() {
    const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

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
    )
}