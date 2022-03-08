import React from "react";
import styles from "./styles.module.scss";
import Video from "../../ui/customVideo";
import Link from "next/link";

const improveOverview = () => {
  return (
    <div className={styles.improve}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p className={styles.paraLead}>IMPROVE WITH THE RIGHT MIND</p>
          <h2>Your company will not be transformed by technology alone.</h2>
          <p>
            People are at the heart of successful transformations. Because the
            cloud allows any organization of any size access to the same
            technology, your competitive advantage comes from your people's
            creativity and new ideas. <br /> <br /> Cloudticians is a corporate
            cloud innovation partner. Our business training solutions bring
            everything you need to modernize your workforce and integrate your
            IT systems together in one place, allowing you to fully realize the
            cloud's potential. <br /> <br /> At every stage of cloud maturity,
            chart an expedited road to success. To help your teams build
            quicker, better, and cheaper in the cloud, we integrates continuous
            learning into your engineering workflows.
          </p>

          <Link href="/pricings">
            <a className="btn-primary btn-small">VIEW PLANS</a>
          </Link>
        </div>

        <div className={styles.right}>
          <Video wrapperClass={styles.video} />
        </div>
      </div>
    </div>
  );
};

export default improveOverview;
