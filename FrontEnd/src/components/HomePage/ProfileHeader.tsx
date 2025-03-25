"use client";

import React from "react";
import styles from "./ProfileHeader.module.css";

interface ProfileHeaderProps {
  name: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name }) => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfe4cf520988eba8d63160b35e220d985160fa0e"
        alt="Decorative cloud"
        className={styles.cloudLeft}
      />
      <div className={styles.avatarWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc948f29ff25deb5cdef020b5551765edc262eff"
          alt={`${name}'s avatar`}
          className={styles.avatar}
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d355a68da927d9fd8bf9f50fb6f1f67ec8e2cf9a"
        alt="Decorative cloud"
        className={styles.cloudRight}
      />
      <h1 className={styles.greeting}>Good Morning, {name}!</h1>
    </header>
  );
};
