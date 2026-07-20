"use client";
import {useState} from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  return (
    <main className={styles.page}>
        <h1 className={styles.subtitle}>
        Welcome to my application
      </h1> 
      <section className={styles.card}>
        <div className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <input className={styles.input} type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input className={styles.input} type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Link className={styles.button} href="/Page"> 
            Login
          </Link>
        </div>
        <div className={styles.signup}>
          <Link className={styles.link} href="/signup">
            Sign up
          </Link>
        </div>
      </section>
    </main>
  );
}