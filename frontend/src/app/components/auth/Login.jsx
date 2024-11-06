"use client";
import React, { useContext, useState } from 'react';;
import styles from './auth.module.css';
import { useRouter } from "next/navigation";
import axios from 'axios'
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const {login} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/user/getUser",{email:email,password:password})
    if(response.data.status){
      let data = response.data.user;
      login(data);
      alert("user found")
      router.push("/project");
    }else{
      alert("user not found.")
      setEmail("")
      setPassword("")
    }
  };

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.authTitle}>Log In</h1>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Log In</button>
      </form>
      <p className={styles.authLink}>
        Don't have an account? <a to="/signup" onClick={()=>router.push("/signup")} className={styles.signupLink}>Sign up</a>
      </p>
    </div>
  );
}

export default Login;
