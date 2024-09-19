import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";

import initialContacts from "../Data/contacts.json";

import css from "./App.module.css";
import clsx from "clsx";


export default function App() {
  const [contacts, setContacts] = useState(() => {
  const savedContacts = window.localStorage.getItem("initialContacts");
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
  });
  
  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    setContacts((currContacts) => {
      return [...currContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((currContacts) => {
      return currContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("initialContacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={clsx(css.container)}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>
  )
}