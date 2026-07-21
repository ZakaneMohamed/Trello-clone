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
async function handsignup(e){
    e.preventDefault();
    const res=await fetch('http://127.0.0.1:8000/api/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Name,
            LastName,
            Email,
            PhoneNumber,
            Password,
            ConfirmPassword
        })
    });
    const data=await res.json();
    console.log(data);
}   
    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <h1 className={styles.title}>Sign up Page</h1>
                <form onSubmit={handsignup} className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                    <input className={styles.input} type="text" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                    <input className={styles.input} type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <input className={styles.input} type="tel" placeholder="Phone Number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input className={styles.input} type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    <input className={styles.input} type="password" placeholder="Confirm Password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button className={styles.button} type="submit">
                            Create Account
                        </button>
                </form>
            </section>
        </main>
    );
}