import React from "react";
import styles from "./styles.module.scss";
import Layout from "../../layouts/landing";
import Companies from "../../components/home/companies";
import Article from "../../components/home/article";
import Reviews from "../../components/home/reviews";
import Outro from "../../components/home/outro";
import ImproveOverview from "../../components/overview/improve";
import IntuitveOverview from "../../components/overview/intuitive";
import RiskFree from "../../components/overview/riskFree";
import CoursesOverview from "../../components/overview/courses";
import LearnOverview from "../../components/overview/learn";
import ScaleUp from "../../components/business/scale";

const Overview = () => {
  return (
    <>
      <section className={styles.overview}>
        <div className={styles.overviewWrapper}>
          <h4>WE ARE HERE TO HELP YOU REACH YOUR POTENTIAL</h4>
          <h2>Create a cloud-based innovation culture.</h2>
          <p>
            Empower teams to unleash the cloud’s full potential with A
            Cloudticians upskilling and reskilling training and our powerful,
            hands-on learning platform.
          </p>
        </div>

        <div className={styles.overviewImg}>
          <img src="/images/google cloud trainer.svg" alt="" loading="lazy" />
          <img src="/images/comptia certifed.svg" alt="" loading="lazy" />
          <img src="/images/Exin SCS.svg" alt="" loading="lazy" />
        </div>
      </section>
      <ImproveOverview />
      <IntuitveOverview />
      <RiskFree />
      <CoursesOverview
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Id urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
            viverra malesuada nibh diam nulla senectus justo, donec etiam. Donec
            hendrerit consequat.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Id urna, ac vitae dui, sit semper orci eu
            tincidunt. Sagittis viverra malesuada nibh diam nulla senectus
            justo, donec etiam. Donec hendrerit consequat."
      />
      <LearnOverview />
      <Companies />
      <Article btnText="SEE ALL ARTICLES" />
      <Reviews />
      <ScaleUp />
      <Outro
        outroText="Do you want to speed up the change of your company?"
        outroBtn="VIEW PLANS"
        outroLink="/pricings"
      />
    </>
  );
};

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
