import React from "react";
import styles from "./styles.module.scss";
import CaseStudyCard from "../ui/caseStudyCard";

const caseStudyRead = () => {
  return (
    <div className={styles.caseStudy}>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img alt="" src="/images/caseStudyHeroCard.svg" />
          </div>
          <div className={styles.right}>
            <h1>KOBOTREE</h1>
            <p>
              KOBOTREE is a platform that looks to curb financial instability by
              providing access to more financial freeedom for everyone and
              helping to close the poverty gap within the society
            </p>
            <div className={styles.heroInfo}>
              <div className={styles.heroInfoDetails}>
                <span>Industry:</span>
                <span>FINTECH</span>
              </div>
              <div className={styles.heroInfoDetails}>
                <span>Duration:</span>
                <span>6 MONTHS</span>
              </div>
              <div className={styles.heroInfoDetails}>
                <span>Project Status:</span>
                <span>COMPLETED</span>
              </div>
            </div>
            <div className={styles.heroLink}>
              <button className="btn-primary btn-medium">
                DOWNLOAD CASE STUDY
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.objective}>
        <div className={styles.objectiveWrapper}>
          <p className={styles.objLead}>THE OBJECTIVE</p>
          <h2>Turning the wheel and inspiring greatness</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Id urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
            viverra malesuada nibh diam nulla senectus justo, donec etiam. Donec
            hendrerit consequat.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Id urna, ac vitae dui, sit semper orci eu
            tincidunt. Sagittis viverra malesuada nibh diam nulla senectus
            justo, donec etiam. Donec hendrerit consequat.
          </p>
          <div className={styles.objGrid}>
            <div className={styles.objCard}>
              <div className={styles.objCardLeft}>
                <i className="far fa-check"></i>
              </div>
              <div className={styles.objCardRight}>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur
                  .
                </p>
              </div>
            </div>
            <div className={styles.objCard}>
              <div className={styles.objCardLeft}>
                <i className="far fa-check"></i>
              </div>
              <div className={styles.objCardRight}>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur
                  .
                </p>
              </div>
            </div>
            <div className={styles.objCard}>
              <div className={styles.objCardLeft}>
                <i className="far fa-check"></i>
              </div>
              <div className={styles.objCardRight}>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pbs}>
        <div className={styles.pbsWrapper}>
          <div className={styles.problem}>
            <div className={styles.problemLeft}>
              <img alt="" src="/images/phoneCaseStudy.svg" />
            </div>
            <div className={styles.problemRight}>
              <p className={styles.problemLead}>ANALYZING THE PROBLEM</p>
              <h2>The Problem</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Id urna, ac vitae dui, sit semper
                orci eu tincidunt. Sagittis viverra malesuada nibh diam nulla
                senectus justo, donec etiam. Donec hendrerit consequat.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
                vitae dui, sit semper orci eu tincidunt. Sagittis viverra
                malesuada nibh diam nulla senectus justo, donec etiam. Donec
                hendrerit consequat.
              </p>
            </div>
          </div>

          <div className={styles.solution}>
            <div className={styles.solutionLeft}>
              <p className={styles.solutionLead}>MAKING IT HAPPEN</p>
              <h2>The Solution</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Id urna, ac vitae dui, sit semper
                orci eu tincidunt. Sagittis viverra malesuada nibh diam nulla
                senectus justo, donec etiam. Donec hendrerit consequat.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
                vitae dui, sit semper orci eu tincidunt. Sagittis viverra
                malesuada nibh diam nulla senectus justo, donec etiam. Donec
                hendrerit consequat.
              </p>
            </div>
            <div className={styles.solutionRight}>
              <img alt="" src="/images/phoneCaseStudy.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.result}>
        <div className={styles.resultWrapper}>
          <p className={styles.resultLead}>THE RESULT</p>
          <h2>We made the dream come true</h2>
          <p>
            As a result of increased work efficiency and transparency across all
            operations, KOBOTREE received positive user feedback. New user
            onboarding was also made easier as a result of the interface
            modifications.
          </p>
          <div className={styles.resultGrid}>
            <div className={styles.resultImg}>
              <img alt="" src="/images/pressPhoneCase.png" />
            </div>
            <div className={styles.resultImg}>
              <img alt="" src="/images/casePhoneLappy.png" />
            </div>
            <div className={styles.resultImg}>
              <img alt="" src="/images/pressPhoneCase2.png" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.client}>
        <div className={styles.clientWrapper}>
          <p className={styles.clientLead}>WHAT THE CLIENT SAID</p>
          <p className={styles.clientReview}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat.
          </p>
        </div>
      </div>

      <div className={styles.related}>
        <div className={styles.relatedWrapper}>
          <h2>Related Case Studies</h2>

          <div className={styles.relatedGrid}>
            <CaseStudyCard
              alt=""
              src="/images/case-study-img.png"
              title="KoboTree"
              desc="How are employers investing time and resources to build their team’s skills—and keep them aboard?"
              tag="FINTECH"
              variant="#D48849"
              href="/case-studies/123"
            />
            <CaseStudyCard
              alt=""
              src="/images/case-study-img.png"
              title="KoboTree"
              desc="How are employers investing time and resources to build their team’s skills—and keep them aboard?"
              tag="FINTECH"
              variant="#284F9E"
              href="/case-studies/123"
            />
            <CaseStudyCard
              alt=""
              src="/images/case-study-img.png"
              title="KoboTree"
              desc="How are employers investing time and resources to build their team’s skills—and keep them aboard?"
              tag="FINTECH"
              variant="#D7787D"
              href="/case-studies/123"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default caseStudyRead;
