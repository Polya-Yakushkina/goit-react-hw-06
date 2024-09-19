import clsx from "clsx";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
    return (
        <div className={clsx(css.container)}>
            <p className={clsx(css.text)}>Find contacts by name</p>
            <input className={clsx(css.input)}
                type="text"
                value={value}
                onChange={e => onSearch(e.target.value)} />
        </div>
    )
}