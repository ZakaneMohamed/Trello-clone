"use client";
import { useRouter } from "next/navigation";
import {useState} from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  async function handleLogin(e){
    e.preventDefault();
    const res=await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    });
    const data = await res.json();
    if(data.check){
      router.push('/Page');
    }else{
      setMessage(data.message);
    }
  }
  return (
    <main className={styles.page}>
        <h1 className={styles.subtitle}>
        Welcome to my application
      </h1> 
      <section className={styles.card}>
        <div className={styles.form}>
          <h2 className={styles.title}>Login</h2>
           <form onSubmit={handleLogin} className={styles.form}> 
          <input className={styles.input} type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input className={styles.input} type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className={styles.button} type="submit">
            Login
          </button>
          <p>{message}</p>
        </form>
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