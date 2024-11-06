"use client";
import styles from "../homepage.module.css"
import SignUp from "../components/auth/SignUp";
// import { useState } from "react";

export default function Home() {

  return (
    <div className={styles.container}>
      <SignUp/>
    </div>
  );
}
