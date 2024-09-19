import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import clsx from "clsx";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={clsx(css.container)}>
            <div className={clsx(css.card)}>
                <p className={clsx(css.text)}><IoPerson /> {name}</p>
                <p className={clsx(css.text)}><FaPhoneAlt /> {number}</p>
            </div>  
            <button className={clsx(css.btn)} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}