import React from 'react';
import styles from './sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0a7ea9136be1201fa32422c84c0e2df9bf95afdfd6341627056f90cd61e751?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16" alt="" className={styles.logoIcon} />
        <span className={styles.logoText}>Projectify</span>
      </div>
      <nav className={styles.navigation}>
        <a className={styles.navLink}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0bda6a6662201ac7003d7d0771ca3ec9bcc98f590ebd23c0beb1698ed85037?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16" alt="" className={styles.navIcon} />
          <span>Dashboard</span>
        </a>
        <a className={styles.navLink}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ae056b1af2f0bdda98899ca70267f6e04fb39ec6132fa90294cebf11e59dbd?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16" alt="" className={styles.navIcon} />
          <span>Portfolio</span>
        </a>
        <a className={styles.navLink}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ad7f5acd208d0337fa82e4bf3f54c4d5b6e8271c1037279bfa4c6000197750?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16" alt="" className={styles.navIcon} />
          <span>Inputs</span>
        </a>
        <a className={styles.navLink}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ef700af9e93a6261707077063dd006a4ab1c21ad4c77981c248590fb5367a68?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16" alt="" className={styles.navIcon} />
          <span>Profile</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
