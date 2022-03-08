import React from "react";
import styles from "./styles.module.scss";
import Layout from "../../layouts/landing";
import Scale from "../../components/home/scale";
import Outro from "../../components/home/outro";
import Link from "next/link";
import MapTalent from "../../components/assessment/mapTalent";
import IntuitiveAssessment from "../../components/assessment/intuitive";

const Assessment = () => {
  return (
    <div className={styles.assessment}>
      <div className={styles.businessHero}>
        <div className={styles.wrapper}>
          <h1>Test your Individual or Organisation Skillset</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat.
          </p>
          <Link href="/">
            <a className="btn-primary btn-medium">START ASSESSMENT</a>
          </Link>
        </div>
      </div>
      <MapTalent />
      <IntuitiveAssessment />
      <Scale />
      <Outro
        outroText="Need assessment for your Business?"
        outroBtn="CONTACT SALES"
        outroLink="/contact-sales"
      />
    </div>
  );
};

export default Assessment;

Assessment.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
