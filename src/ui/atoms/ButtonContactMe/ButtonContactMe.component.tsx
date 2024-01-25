import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/constants";

import styles from "./ButtonContactMe.module.scss";

const ButtonContactMe = () => {
  return (
    <Link to={ROUTES.CONTACTS.path} className={styles.button}>
      <div>Contact Me →</div>
    </Link>
  );
};

export default ButtonContactMe;
