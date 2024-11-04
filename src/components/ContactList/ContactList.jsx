import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';
import {selectFilteredContacts} from '../../redux/contactsSlice'

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);
    
    
    return <ul className={css.contactsList}>
        {filteredContacts.map((contact) => (
            <li className={css.contactItem} key={contact.id}>
            <Contact name={contact.name} number={contact.number} id={contact.id} />
        </li>))}
        
        
    </ul>
}

