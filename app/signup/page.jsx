"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Signup() {
const[Name,setName]=useState("");
const[LastName,setLastName]=useState("");
const[Email,setEmail]=useState("");
const[PhoneNumber,setPhoneNumber]=useState("");
const[Password,setPassword]=useState("");
const[ConfirmPassword,setConfirmPassword]=useState("");
    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <h1 className={styles.title}>Sign up Page</h1>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                    <input className={styles.input} type="text" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                    <input className={styles.input} type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <input className={styles.input} type="tel" placeholder="Phone Number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input className={styles.input} type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    <input className={styles.input} type="password" placeholder="Confirm Password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Link className={styles.button} href="/login">
                        Create Account
                    </Link>
                </form>
            </section>
        </main>
    );
}