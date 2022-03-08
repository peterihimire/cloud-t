import React, { useState } from "react";
import styles from "./styles.module.scss";
import Outro from "../home/outro";
import RatingStars from "../ui/ratings";
import CustomTabs from "../ui/tabs";
import Overview from "./overview";
import Playlist from "./playlist";
import Discussion from "./discussion";

const SingleCourseIndex = ({ title, rating, enrolls }) => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "Overview",
      id: 1,
    },
    {
      name: "Discussion",
      id: 2,
    },
    {
      name: "Resources",
      id: 3,
    },
    {
      name: "Related Courses",
      id: 4,
    },
  ];

  return (
    <div className={styles.course}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.hero}>
            <h1>{title}</h1>

            <div className={styles.heroInfo}>
              <RatingStars rating={rating} />
              <div className={styles.tutor}>-Daniel Kadiri</div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus justo, donec etiam.
            </p>

            <div className={styles.heroActions}>
              {/* this below buttons will be rendered conditionally depending on if the user has subscribed to a package */}
              <a href="/" className="btn-primary btn-medium">
                START A FREE 3-DAY TRIAL
              </a>
              <a href="/" className="btn-transparent">
                <i className="far fa-play-circle"></i>
                WATCH COURSE OVERVIEW
              </a>
              {/* a "resume course" button will be rendered based on user's auth and if course has been started */}
            </div>
          </div>

          <CustomTabs
            activeTab={tabIndex}
            clicked={(index) => tabIndexHandler(index)}
            headers={tabHeaders}
            headersSpaced
          >
            <div className={styles.tabContent}>
              {tabIndex === 1 && <Overview rating={rating} />}
              {tabIndex === 2 && <Discussion />}
            </div>
          </CustomTabs>
        </div>

        <div className={styles.right}>
          <Playlist />
        </div>
      </div>

      {/* render this based on user's auth */}
      {/* <Outro
        outroText="Keep yourself ahead by keeping up on your dream"
        outroBtn="TRY FOR FREE"
        outroLink="/register"
      /> */}
    </div>
  );
};

export default SingleCourseIndex;
