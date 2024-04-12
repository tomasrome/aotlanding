import styles from "./home.module.css";
import Characters from "../../components/characters/characters";

function Home() {
  return (
    <div>
      <section id="home" className={styles.container}>
        <h1>Attack on Titan API</h1>
        <img src="../../public/2.png" alt="" />
      </section>
      <section>
        <Characters />
      </section>
    </div>
  );
}

export default Home;
