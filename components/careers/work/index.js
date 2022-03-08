import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Video from "../../ui/customVideo";
import Link from "next/link";

const work = () => {
  return (
    <section className={styles.work}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <article className={styles.employment}>
            <h3>Working at Cloudtician</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque tellus justo sapien quis semper tincidunt. Tortor
              suspendisse egestas lectus ultricies quis elementum. Nulla integer
              nec, urna amet in hendrerit enim metus. Cursus proin morbi sit
              rhoncus. Massa nulla dui amet sit arcu malesuada scelerisque morbi
              ultrices Pellentesque tortor urna.
            </p>

            <Video wrapperClass={styles.workVideo} />
          </article>

          <article className={styles.requirement}>
            <h3>What we are looking for</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque tellus justo sapien quis semper tincidunt. Tortor
              suspendisse egestas lectus ultricies quis elementum.
            </p>

            <ul className={styles.reqList}>
              <li>
                A creative problem-solver who thrives in a collaborative, Agile
                environment.
              </li>
              <li>
                Individual who is passionate about developing strategies derived
                from insight, with the mastery of your craft to turn these into
                products.
              </li>
              <li>
                Individual with proven ability to act as a leader in building
                relationships with stakeholders from various disciplines and
                influencing others
              </li>
            </ul>
          </article>

          <article className={styles.benefits}>
            <h3>Benefit for you to get</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque tellus justo sapien quis semper tincidunt. Tortor
              suspendisse egestas lectus ultricies quis elementum.
            </p>

            <ul className={styles.reqList}>
              <li>
                Twice yearly all expenses paid leave for you and your family
              </li>
              <li>
                USD$1,000 shopping voucher and Gym payment for a full calender
                year
              </li>
              <li>
                Car and Health insurance after 2 years of being a staff at
                cloudticians
              </li>
              <li>20% bonus of annual salary and 10% bonus quarterly.</li>
            </ul>
          </article>
        </div>

        <div className={styles.right}>
          <h5>Open positions</h5>

          <div className={styles.searchJobs}>
            <Input
              innerLabel
              id="search"
              type="text"
              placeholder="Search Jobs"
              wrapperClass={styles.searchWrapper}
            >
              <i className="far fa-search"></i>
            </Input>

            <ul className={styles.jobsList}>
              <li>
                {/* this link is to a dynamic route */}
                <Link href="/careers/123">
                  <a>
                    <h4>Snr. Product Designer</h4>
                    <div className={styles.jobTags}>
                      <span>
                        <i className="fal fa-clock"></i> Full-Time
                      </span>

                      <span>
                        <i className="fal fa-map-marker-alt"></i> Temporarily
                        Remote
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/careers/123">
                  <a>
                    <h4>QA Tester</h4>
                    <div className={styles.jobTags}>
                      <span>
                        <i className="fal fa-clock"></i> Full-Time
                      </span>

                      <span>
                        <i className="fal fa-map-marker-alt"></i> Houston, Texas
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/careers/123">
                  <a>
                    <h4>Business Development Manager</h4>
                    <div className={styles.jobTags}>
                      <span>
                        <i className="fal fa-clock"></i> Contract
                      </span>

                      <span>
                        <i className="fal fa-map-marker-alt"></i> Temporarily
                        Remote
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>

            <div className={styles.loadMore}>
              <button className="hovered">
                LOAD MORE JOBS <i className="far fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default work;
