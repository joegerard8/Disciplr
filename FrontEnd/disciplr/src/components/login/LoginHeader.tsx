import React from "react";
import styles from "./LoginHeader.module.css";

export const LoginHeader: React.FC = () => {
  return (
    <section className={styles.header}>
      <h1 className={styles.title}>Disciplr.</h1>
      <div className={styles.profileImage}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd3ff7d572c00f249febe6aab192a9186cd37e17"
          alt="Profile"
          className={styles.image}
        />
      </div>
    </section>
  );
};
