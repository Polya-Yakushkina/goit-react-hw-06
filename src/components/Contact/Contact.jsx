import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css";
import clsx from "clsx";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.card)}>
        <p className={clsx(css.text)}><IoPerson /> {name}</p>
        <p className={clsx(css.text)}><FaPhoneAlt /> {number}</p>
      </div>
      <button className={clsx(css.btn)} onClick={handleDelete}>Delete</button>
    </div>
  );
}