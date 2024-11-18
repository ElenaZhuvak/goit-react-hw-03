import Contact from "../Contact/Contact"
import css from './ContactList.module.css'


const ContactList = ({contacts, onDelete}) => {
  return (
    <ul>
        {contacts.map(contact => {
            return <li className={css.listItem} key={contact.id}>
                <Contact data={contact} onDelete={onDelete}/>
            </li>
        })}
    </ul>
  )
}

export default ContactList