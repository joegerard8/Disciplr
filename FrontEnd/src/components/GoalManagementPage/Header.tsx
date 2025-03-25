"use client";
import React from "react";
import styles from "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.statusBar}>
        <time className={styles.time}>9:41</time>
        <div className={styles.spacer} />
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="135" height="14" viewBox="0 0 135 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.115 2.03302C43.115 1.39997 42.6375 0.886791 42.0484 0.886791H40.9817C40.3926 0.886791 39.915 1.39997 39.915 2.03302V11.967C39.915 12.6 40.3926 13.1132 40.9817 13.1132H42.0484C42.6375 13.1132 43.115 12.6 43.115 11.967V2.03302ZM35.6809 3.33207H36.7476C37.3367 3.33207 37.8143 3.85757 37.8143 4.50581V11.9395C37.8143 12.5877 37.3367 13.1132 36.7476 13.1132H35.6809C35.0918 13.1132 34.6143 12.5877 34.6143 11.9395V4.50581C34.6143 3.85757 35.0918 3.33207 35.6809 3.33207ZM31.3492 5.98112H30.2825C29.6934 5.98112 29.2158 6.51331 29.2158 7.1698V11.9245C29.2158 12.581 29.6934 13.1132 30.2825 13.1132H31.3492C31.9383 13.1132 32.4158 12.581 32.4158 11.9245V7.1698C32.4158 6.51331 31.9383 5.98112 31.3492 5.98112ZM26.0484 8.42641H24.9817C24.3926 8.42641 23.915 8.951 23.915 9.59811V11.9415C23.915 12.5886 24.3926 13.1132 24.9817 13.1132H26.0484C26.6375 13.1132 27.115 12.5886 27.115 11.9415V9.59811C27.115 8.951 26.6375 8.42641 26.0484 8.42641Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.6865 3.30213C61.1736 3.30223 63.5657 4.22432 65.3682 5.8778C65.5039 6.00545 65.7209 6.00384 65.8545 5.87419L67.152 4.61072C67.2197 4.54496 67.2575 4.45588 67.2569 4.3632C67.2563 4.27052 67.2175 4.18187 67.149 4.11688C62.418 -0.257833 54.9543 -0.257833 50.2233 4.11688C50.1548 4.18183 50.1159 4.27044 50.1152 4.36313C50.1146 4.45581 50.1523 4.54491 50.2199 4.61072L51.5178 5.87419C51.6514 6.00404 51.8685 6.00565 52.0042 5.8778C53.8069 4.22421 56.1992 3.30212 58.6865 3.30213Z" fill="black"/>
            <rect opacity="0.35" x="74.7568" y="1" width="24" height="12" rx="3.8" stroke="black"/>
          </svg>`,
          }}
        />
      </div>
      <nav className={styles.navigation}>
        <button className={styles.menuButton} aria-label="Menu">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="black"/>
            </svg>`,
            }}
          />
        </button>
        <h1 className={styles.pageHeading}>Goals</h1>
        <div className={styles.placeholder} />
      </nav>
    </header>
  );
};

export default Header;
