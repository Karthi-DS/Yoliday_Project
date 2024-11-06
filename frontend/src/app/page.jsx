"use client";
import styles from "./homepage.module.css";
import Login from "./components/auth/Login";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <BrowserRouter> */}
          <Login/>
      {/* </BrowserRouter> */}
    </div>
  );
}
