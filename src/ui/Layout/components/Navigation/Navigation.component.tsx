import { Link, LinkProps } from "react-router-dom";

import styles from "./Navigation.module.scss";
import { ROUTES } from "../../../../routes/constants";
import ButtonContactMe from "../../../atoms/ButtonContactMe";

import cx from "classnames";

const LogoSvg = (props: React.SVGProps<SVGSVGElement>) => {
  // return (
  //   <svg
  //     {...props}
  //     xmlns="http://www.w3.org/2000/svg"
  //     x="0px"
  //     y="0px"
  //     width="100"
  //     height="100"
  //     viewBox="0 0 24 24"
  //   >
  //     <path d="M6.5 3.427l9.385 4.693-1.988 1.193L6.5 6.025V3.427M5 1v6l9 4 5-3L5 1 5 1zM17.5 12.621v2.452l-4.903 2.452L17.5 12.621M19 9L5 23l14-7V9L19 9zM6.5 11l.735.551L6.5 13.757V11M5 8v15l4-12L5 8 5 8z"></path>
  //   </svg>
  // );

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
    >
      <path d="M 20 4 A 1.0001 1.0001 0 0 0 19.132812 5.4980469 L 42.132812 45.498047 A 1.0001 1.0001 0 0 0 43.894531 45.447266 L 47.941406 37.353516 C 48.684341 35.865149 48.639219 34.100405 47.818359 32.652344 L 33.019531 6.5351562 C 32.13285 4.9703519 30.469469 4 28.669922 4 L 20 4 z M 21.728516 6 L 28.669922 6 C 29.752375 6 30.745978 6.5802888 31.279297 7.5214844 L 46.078125 33.638672 C 46.571265 34.508611 46.599408 35.565303 46.152344 36.460938 L 42.9375 42.886719 L 21.728516 6 z M 15.996094 11 A 1.0001 1.0001 0 0 0 15.138672 11.492188 L 5.1386719 28.492188 A 1.0001 1.0001 0 0 0 6 30 L 27 30 A 1.0001 1.0001 0 0 0 27.839844 28.457031 L 16.839844 11.457031 A 1.0001 1.0001 0 0 0 15.996094 11 z M 16.041016 13.904297 L 25.162109 28 L 7.7480469 28 L 16.041016 13.904297 z M 3 35 A 1.0001 1.0001 0 0 0 2.125 36.486328 L 7.125 45.486328 A 1.0001 1.0001 0 0 0 8 46 L 36 46 A 1.0001 1.0001 0 0 0 36.875 44.513672 L 31.875 35.513672 A 1.0001 1.0001 0 0 0 31 35 L 3 35 z M 4.7011719 37 L 30.412109 37 L 34.298828 44 L 8.5878906 44 L 4.7011719 37 z"></path>
    </svg>
  );
};

const MenuItem = ({ className, ...props }: LinkProps) => {
  return <Link {...props} className={cx(styles.link, className)} />;
};

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      {/* <div>Logo</div> */}
      <LogoSvg className={styles.logo} />

      <div className={styles.links}>
        <MenuItem to={ROUTES.HOME.path}>{ROUTES.HOME.title}</MenuItem>
        <MenuItem to={ROUTES.EXPERIENCE.path}>
          {ROUTES.EXPERIENCE.title}
        </MenuItem>
      </div>

      <ButtonContactMe />
    </div>
  );
};

export default Navigation;
