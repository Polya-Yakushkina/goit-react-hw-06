import Contact from "../Contact/Contact";

import clsx from "clsx";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={clsx(css.list)}>
            {contacts.map((contact) => (
                <li key={contact.id} className={clsx(css.item)}>
                    <Contact data={contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}