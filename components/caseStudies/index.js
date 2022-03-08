import React from "react";
import styles from "./styles.module.scss";
import SearchInput from "../ui/customSearchInput";
import Select from "../ui/customSelect";
import Pagination from "../ui/pagination";
import CaseStudyCard from "../ui/caseStudyCard";
import InsightCard from "../ui/insightCard";

const caseStudies = () => {
  return (
    <div className={styles.caseStudies}>
      <div className={styles.wrapper}>
        <p className={styles.paraLead}>TOGETHER WE CAN DO MORE</p>
        <h1>We are helping teams to scale up</h1>
        <p>
          Empower teams to unleash the cloud’s full potential with A
          Cloudticians upskilling and reskilling training and our powerful,
          hands-on learning platform.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.filterGrid}>
            <div className={styles.searchBox}>
              <SearchInput
                wrapperClass={styles.searchInput}
                type="text"
                innerLabel
                id="search"
                placeholder="Search Case Studies"
              >
                <i className="far fa-search"></i>
              </SearchInput>
            </div>

            <div className={styles.filterBox}>
              <Select id="filterType">
                <option>All Categories</option>
              </Select>
            </div>

            <div className={styles.yearBox}>
              <Select id="year">
                <option>2021</option>
              </Select>
            </div>
          </div>

          <div className={styles.studyGrid}>
            {/* links should be to a dynamic route */}
            <CaseStudyCard
              alt=""
              src="/images/case-study-img.png"
              title="KoboTree"
              desc="How are employers investing time and resources to build their team’s skills—and keep them aboard?"
              tag="FINTECH"
              variant="#A3C371"
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
            <CaseStudyCard
              alt=""
              src="/images/case-study-img.png"
              title="KoboTree"
              desc="How are employers investing time and resources to build their team’s skills—and keep them aboard?"
              tag="FINTECH"
              variant="#7D25C3"
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
              variant="#D48849"
              href="/case-studies/123"
            />
            <CaseStudyCard
              alt=""
              src="/images/case-study-img.png"
              title="KoboTree"
              desc="How are employers investing time and resources to build their team’s skills—and keep them aboard?"
              tag="FINTECH"
              variant="#48A0CD"
              href="/case-studies/123"
            />
          </div>

          <Pagination
            containerClassName="pagination"
            pageCount={10}
            activeClassName="paginate-active"
            disabledClassName="paginate-disabled"
            previousClassName="paginate-previous"
            nextClassName="paginate-next"
          />
        </div>
      </div>

      <div className={styles.recent}>
        <div className={styles.recentWrapper}>
          <div className={styles.recentHeader}>
            <h2>Most recent blog read</h2>
            <p>
              Keep up with the latest in modern tech skills, including new
              course releases and certification exam updates, as well as
              learning tips and step-by-step tutorials from our instructors,
              best practices for businesses re-skilling their workforce, and
              more.
            </p>
          </div>

          <div className={styles.insightGrid}>
            <InsightCard
              link="/insights/123"
              alt=""
              src="/images/insight-img.png"
              title="The Cloud Path: Engineering the pathway to success"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
              label="Technology"
            />
            <InsightCard
              link="/insights/123"
              alt=""
              src="/images/insight-img.png"
              title="The Cloud Path: Engineering the pathway to success"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
              label="Technology"
            />
            <InsightCard
              link="/insights/123"
              alt=""
              src="/images/insight-img.png"
              title="The Cloud Path: Engineering the pathway to success"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
              label="Technology"
            />
            <InsightCard
              link="/insights/123"
              alt=""
              src="/images/insight-img.png"
              title="The Cloud Path: Engineering the pathway to success"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
              label="Technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default caseStudies;
