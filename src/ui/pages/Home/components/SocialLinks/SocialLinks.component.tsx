import { Link } from "react-router-dom";
import styles from "./SocialLinks.module.scss";
import IconInstagram from "../../../../icons/svg/IconInstagram.component";
import IconLinkedIn from "../../../../icons/svg/IconLinkedIn.component";
import {
  MY_LINKED_IN_URL,
  MY_INSTAGRAM_URL,
  MY_VK_URL,
} from "../../../../../constants";
import IconVK from "../../../../icons/svg/IconVK.component";

const ICON_SIZE = 24;

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={MY_LINKED_IN_URL} target="_blank">
        <IconLinkedIn width={ICON_SIZE} height={ICON_SIZE} />
      </Link>
      <Link className={styles.link} to={MY_INSTAGRAM_URL} target="_blank">
        <IconInstagram width={ICON_SIZE} height={ICON_SIZE} />
      </Link>
      <Link className={styles.link} to={MY_VK_URL} target="_blank">
        <IconVK width={ICON_SIZE} height={ICON_SIZE} />
      </Link>
    </div>
  );
};

export default SocialLinks;
