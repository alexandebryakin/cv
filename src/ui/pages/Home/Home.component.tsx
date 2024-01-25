import styles from "./Home.module.scss";
import SocialLinks from "./components/SocialLinks";

const Home = () => {
  return (
    <>
      <div className={styles.bgImage} />
      <SocialLinks />
    </>
  );
};

export default Home;
