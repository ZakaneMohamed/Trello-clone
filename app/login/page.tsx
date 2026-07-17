import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  return (
    <main className={styles.page}>
        <h1 className={styles.subtitle}>
        Welcome to my application
      </h1> 
      <section className={styles.card}>
        <div className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <input className={styles.input} type="email" placeholder="Email" />
          <input className={styles.input} type="password" placeholder="Password" />
          <button className={styles.button} type="submit">
            Login
          </button>

          <Link className={styles.link} href="/signup">
            Sign up
          </Link>
        </div>
      </section>
    </main>
  );
}