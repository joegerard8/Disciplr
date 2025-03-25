import React from "react";
import styles from "./FocusAreas.module.css";

interface LegendItem {
  color: string;
  label: string;
}

export const FocusAreas: React.FC = () => {
  const legendItems: LegendItem[] = [
    { color: "#D2555A", label: "Restoration" },
    { color: "#FFC36E", label: "Prayer" },
    { color: "#A5D76E", label: "Prophets" },
  ];

  return (
    <section className={styles.focusContainer}>
      <h2 className={styles.focusTitle}>Focus Areas</h2>
      <div className={styles.chartContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f551de1028dcca6685768c89c6bf5ae168d291f"
          alt="Focus areas distribution pie chart"
          className={styles.pieChart}
        />
        <div className={styles.legendContainer}>
          {legendItems.map((item, index) => (
            <div key={index} className={styles.legendItem}>
              <div
                className={styles.legendDot}
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              <span className={styles.legendLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
