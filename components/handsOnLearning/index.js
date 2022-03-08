import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Filter from "./filter";
import Courses from "./courses";
import Outro from "../home/outro";

const handsOnLearningIndex = () => {
  return (
    <div className={styles.learning}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Learn By Doing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat.
          </p>
          <Link href="/register">
            <a className="btn-primary btn-small">TRY FOR FREE</a>
          </Link>
        </div>
        <div className={styles.right}>
          <img alt="" src="/images/pressingPc.svg" />
        </div>
      </div>

      <div className={styles.learnContent}>
        <div className={styles.contentHeader}>
          <p>UNLIMITED POSSIBILITIES</p>
          <h2>
            Hundreds of courses. Thousands of labs. Endless possibilities.
          </h2>
        </div>

        <div className={styles.content}>
          <Filter />
          <Courses />
        </div>
      </div>

      <Outro
        outroText="Keep yourself ahead by keeping up on your dream"
        outroBtn="TRY FOR FREE"
        outroLink="/register"
      />
    </div>
  );
};

export default handsOnLearningIndex;
