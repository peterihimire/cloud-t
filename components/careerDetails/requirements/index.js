import React from "react";
import styles from "./styles.module.scss";
import CareerForm from "../form";

const requirements = () => {
  return (
    <div className={styles.requirements}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.details}>
            <h3>Requirements</h3>

            <ul className={styles.reqList}>
              <li>
                Understand the company's mission and goal, and bring that to
                life in our products
              </li>
              <li>Creating and maintaining a design system</li>
              <li>
                Creating graphical designs where needed for ads or similar use
                cases
              </li>
              <li>
                Always keep the company's product up to date with the latest
                UI/UX design standards, while retaining our core values
              </li>
              <li>
                Must be able to conduct surveys and research to improve our
                products
              </li>
              <li>
                Work closely with product managers and other teams (sales and
                marketing) to establish plan for product release
              </li>
            </ul>
          </div>

          <div className={styles.details}>
            <h3>Qualification</h3>

            <ul className={styles.reqList}>
              <li>Barchelor's degree</li>
              <li>2 - 5 years experience in product design or related field</li>
              <li>Well skilled in creating UI/UX mockups, wireframing, etc</li>
              <li>Skilled at UI tools like Figma, Photoshop, etc</li>
              <li>Portfolio of work</li>
              <li>Proficient in Microsoft Office</li>
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <h3>Apply for this job</h3>

          <CareerForm />
        </div>
      </div>
    </div>
  );
};

export default requirements;
