import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

import clsx from "clsx";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={clsx(css.container)}>
      <p className={clsx(css.text)}>Find contacts by name</p>
      <input
        className={clsx(css.input)}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}