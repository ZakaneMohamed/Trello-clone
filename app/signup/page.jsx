import Link from "next/link";
import styles from "./page.module.css";

export default function Signup() {
    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <h1 className={styles.title}>Sign up Page</h1>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Name" />
                    <input className={styles.input} type="text" placeholder="Last Name" />
                    <input className={styles.input} type="email" placeholder="Email" />
                    <input className={styles.input} type="tel" placeholder="Phone Number" />
                    <input className={styles.input} type="password" placeholder="Password" />
                    <input className={styles.input} type="password" placeholder="Confirm Password" />
                    <Link className={styles.button} href="/login">
                        Create Account
                    </Link>
                </form>
            </section>
        </main>
    );
}