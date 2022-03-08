import React from "react";
import styles from "./styles.module.scss";
import Layout from "../../layouts/landing";
import Certifications from "../../components/business/certifications";
import Companies from "../../components/home/companies";
import Article from "../../components/home/article";
import Reviews from "../../components/home/reviews";
import Outro from "../../components/home/outro";
import Link from "next/link";
import IntuitiveBusiness from "../../components/business/intuitive";
import LearnBusiness from "../../components/business/learn";
import ScaleUp from "../../components/business/scale";

const Business = () => {
  return (
    <div className={styles.businessPage}>
      <div className={styles.businessHero}>
        <div className={styles.wrapper}>
          <h1>Business: Grow your team to accomplish your vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat.
          </p>
          <Link href="/contact-sales">
            <a className="btn-primary btn-small">CONTACT SALES</a>
          </Link>
        </div>
      </div>

      {/* might probably redo this, should be a srollable container */}
      <Certifications />
      <Companies />
      <IntuitiveBusiness />
      <LearnBusiness />
      <Article btnText="SEE ALL INSIGHTS" />
      <Reviews />
      <ScaleUp />
      <Outro
        outroText="Looking to take your business competency to another level?"
        outroBtn="CONTACT SALES"
        outroLink="/contact-sales"
      />
    </div>
  );
};

export default Business;

Business.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
