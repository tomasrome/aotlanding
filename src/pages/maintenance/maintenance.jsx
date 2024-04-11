import styles from "./maintenance.module.css";

function Maintenance() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <h1>Website under maintenance</h1>
      </div>
    </div>
  );
}

export default Maintenance;
