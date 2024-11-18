import 'modern-normalize'
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import SearchBox from "./SearchBox/SearchBox"
import css from "./App.module.css"
import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  // const contactData = [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ]
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])

  const [newValue, setNewValue] = useState('')

  // () => {
  //   const savedData = localStorage.getItem('contacts')
  //   if (savedData !== null) {
  //     return JSON.parse(savedData);
  //   }
  //   contactData;
  // }

  const addContact = () => {
    const newContact = {
      id: nanoid(),
      name: '',
      number: '' 
    }
    setContacts((prevContacts) => [...prevContacts, newContact])
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  // const visibleContactList = () => {
  //   contacts.filter(contact => contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  // }

  return (
    <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact}/>
        <SearchBox value={newValue} onChange={setNewValue} />
        <ContactList contacts={contacts} onDelete={deleteContact}/>
    </div>
  )
}

export default App