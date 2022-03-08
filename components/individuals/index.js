import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import PopularVideos from "../home/popularVideos";
import Companies from "../home/companies";
import CoursesOverview from "../overview/courses";
import Video from "../ui/customVideo";
import PricingCards from "../pricings/pricingCards";
import Outro from "../home/outro";

const individualsIndex = () => {
  return (
    <div className={styles.individuals}>
      <div className={styles.hero}>
        <div className={styles.heroWrapper}>
          <h1>Individuals: Improve your skills</h1>
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
      </div>

      <div className={styles.popVids}>
        <PopularVideos />
      </div>

      <div className={styles.secondSection}>
        <div className={styles.compsWrapper}>
          <Companies />
        </div>

        <CoursesOverview text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada nibh diam nulla senectus justo, donec etiam. Donec hendrerit consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
      </div>

      <div className={styles.overview}>
        <div className={styles.overviewWrapper}>
          <div className={styles.overviewLeft}>
            <p className={styles.overLead}>OVERVIEW</p>
            <h2>Sustaining your skill through learning and by doing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus justo, donec etiam. Donec
              hendrerit consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Id urna, ac vitae dui, sit semper orci eu
              tincidunt. Sagittis viverra malesuada nibh diam nulla senectus
              justo, donec etiam.{" "}
            </p>
            <Link href="/hands-on-learning">
              <a className="btn-primary btn-small">EXPLORE LAB</a>
            </Link>
          </div>
          <div className={styles.overviewRight}>
            <Video wrapperClass={styles.overVideo} />
          </div>
        </div>
      </div>

      <div className={styles.learningPath}>
        <div className={styles.pathWrapper}>
          <div className={styles.pathLeft}>
            <img alt="" src="/images/expand-logos.svg" />
          </div>
          <div className={styles.pathRight}>
            <p className={styles.pathLead}>LEARNING PATH</p>
            <h2>
              Be intuitive about your growth, Learn about your current
              capability
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus justo, donec etiam. Donec
              hendrerit consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Id urna, ac vitae dui, sit semper orci eu
              tincidunt. Sagittis viverra malesuada nibh diam nulla senectus
              justo, donec etiam. Donec hendrerit consequat.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Id urna, ac vitae dui, sit
              semper orci eu tincidunt. Sagittis viverra malesuada nibh diam
              nulla senectus justo, donec etiam. Donec hendrerit consequat.
            </p>
            <a href="/" className="btn-primary btn-small">
              BROWSE PATH
            </a>
          </div>
        </div>
      </div>

      <div className={styles.pricingSection}>
        <div className={styles.pricingsLead}>
          <p>THERE’S SOMETHING FOR EVERYONE</p>
          <h1>Choose plan that works best for you</h1>
        </div>

        <PricingCards
          wrapperClass={styles.pricings}
          cardsClass={styles.priceCard}
        />
      </div>

      <Outro
        outroText="Keep yourself ahead by keeping up on your dream"
        outroLink="/register"
        outroBtn="TRY FOR FREE"
      />
    </div>
  );
};

export default individualsIndex;
