"use client";
import React from 'react';
import styles from './header.module.css';
import { useAuth } from '@/app/context/AuthContext';

function Header() {
  const {user} = useAuth();
  return (
    <div className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e30128402639d2bbe910fc2e4928b765b6bb298229cc1dc211d7406efddac189?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16" alt="" className={styles.logoIcon} />
      <div className={styles.userInfo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd070a8ebfcbdc5273fc657aaf4efd9d27377575d0d49657620fd58f38607434?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16" alt="User avatar" className={styles.userAvatar} />
        <div className={styles.userDetails}>
          <div className={styles.userName}>
            {user.name}
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/900b609f12d4e050286ef245c2eaa41d6a7072d49c75bb152fce8f69633fecb6?placeholderIfAbsent=true&apiKey=23c558b43f3b4e1e864f68a8828bbd16" alt="" className={styles.verifiedIcon} />
          </div>
          <div className={styles.userRole}>{user.email}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
