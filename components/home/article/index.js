import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const article = ({ btnText }) => {
  return (
    <section className={styles.article}>
      <div className={styles.left}>
        <img alt="" src="/images/man2.png" loading="lazy" />
      </div>

      <div className={styles.right}>
        <h4>BE UP TO DATE</h4>

        <h2>Exclusive Cloudtician Article</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
          vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
          nibh diam nulla senectus justo, donec etiam. Donec hendrerit
          consequat.
        </p>

        <Link href="/insights">
          <a className="btn-primary btn-small">
            {btnText}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default article;
