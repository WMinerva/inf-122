import Photo from "./components/photo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </main>
  );
}
