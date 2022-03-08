import React, { useState } from "react";
import FolderSvg from "../../public/images/folder.svg";
import RoleBase from "../dashboardPage/roleBase";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const CourseOverview = () => {
  const [clicked, setClicked] = useState(0);
  const router = useRouter();

  const toggler = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <>
      <div className={styles.course__verview__hero}>
        <div className={styles.course__verview__hero__bg}></div>
        <div className={styles.course__verview__hero__content__wrapper}>
          <div className={styles.course__verview__hero__content}>
            <h3 className={styles.course__verview__hero__content__title}>
              AWS &gt; Certification
            </h3>
            <h1
              className={styles.course__verview__hero__content__title__header}
            >
              Ultimate AWS Certified Solution Architect Associate 2021
            </h1>
            <button
              className={styles.course__verview__hero__content__description}
              // this is hard coded for now
              onClick={() =>
                router.push({
                  pathname: `/courses/aws/course`,
                  query: {
                    title:
                      "Ultimate AWS Certified Solutions Architect Associate 2021",
                    rating: "4.8",
                    enrolls: "1,200",
                  },
                })
              }
            >
              START COURSE
            </button>

            <div className={styles.courseOverview__header__content1}>
              <h3 className={styles.courseOverview__header__content__title}>
                Description
              </h3>
              <p
                className={styles.courseOverview__header__content__description}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                urna, sed penatibus vel nisl vitae vel consectetur bibendum.
                Mattis ornare vitae scelerisque dignissim lorem massa ultrices
                euismod bibendum. Tincidunt nisi morbi euismod donec praesent
                sagittis ultrices est. Faucibus adipiscing scelerisque faucibus
                phasellus risus sed. Eu maecenas luctus neque, cursus congue
                nunc. Sed eget et aliquet nam nunc tellus, ornare ullamcorper.
                Sit accumsan tortor, tempus sit. Nullam at ultrices dictum ut
                eget aliquet gravida. Quis lacus in semper in nisl. <br />
                Nulla vel eget dui, eget. Faucibus at augue ipsum vitae nec quis
                hendrerit. Pellentesque egestas pellentesque scelerisque vitae
                ac lobortis vitae a sed. Venenatis pellentesque blandit amet
                odio mattis diam, donec purus, posuere. Integer fermentum, massa
                volutpat diam leo neque urna ultricies nulla. Euismod magnis
                pellentesque quam venenatis, rutrum semper. Mi id a morbi massa
                mauris felis, euismod a ullamcorper. Gravida consectetur egestas
                a neque habitant tincidunt lorem. Mauris consectetur morbi sit
                convallis.
              </p>
            </div>

            <div className={styles.courses}>
              <h2>Courses</h2>

              <ul className={styles.accordion}>
                <li>
                  <button onClick={() => toggler(0)}>
                    <div className={styles.headInfo}>
                      <h4 className={styles.difficulty}>Novice</h4>
                      <span className={styles.duration}>
                        40 Total Lessons, 5 Hours Video
                      </span>
                    </div>
                    <div className={styles.rotate}>
                      <i
                        className={`fas fa-chevron-down ${
                          clicked === 0 && "fa-rotate-180"
                        }`}
                      ></i>
                    </div>
                  </button>

                  <div
                    className={`${styles.content} ${
                      clicked === 0 && styles.show
                    }`}
                  >
                    <h5 className={styles.subHead}>
                      <div>
                        <FolderSvg />
                      </div>
                      <span>Introduction to AWS</span>
                    </h5>

                    <ul className={styles.subPlaylist}>
                      <li>
                        <a>
                          <span className={styles.videoInfo}>
                            <span className={styles.playIcon}>
                              <i className="far fa-play-circle"></i>
                            </span>
                            <span className={styles.videoTitle}>
                              Getting Started
                            </span>
                          </span>
                          <span className={styles.videoDuration}>00:44</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className={styles.videoInfo}>
                            <span className={styles.playIcon}>
                              <i className="far fa-play-circle"></i>
                            </span>
                            <span className={styles.videoTitle}>
                              The EC2 Compute AWS Service
                            </span>
                          </span>
                          <span className={styles.videoDuration}>02:44</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <button onClick={() => toggler(1)}>
                    <div className={styles.headInfo}>
                      <h4 className={styles.difficulty}>Intermediate</h4>
                      <span className={styles.duration}>
                        40 Total Lessons, 5 Hours Video
                      </span>
                    </div>
                    <div className={styles.rotate}>
                      <i
                        className={`fas fa-chevron-down ${
                          clicked === 1 && "fa-rotate-180"
                        }`}
                      ></i>
                    </div>
                  </button>

                  <div
                    className={`${styles.content} ${
                      clicked === 1 && styles.show
                    }`}
                  >
                    <h5 className={styles.subHead}>
                      <div>
                        <FolderSvg />
                      </div>
                      <span>Introduction to AWS</span>
                    </h5>

                    <ul className={styles.subPlaylist}>
                      <li>
                        <a>
                          <span className={styles.videoInfo}>
                            <span className={styles.playIcon}>
                              <i className="far fa-play-circle"></i>
                            </span>
                            <span className={styles.videoTitle}>
                              Getting Started
                            </span>
                          </span>
                          <span className={styles.videoDuration}>00:44</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className={styles.videoInfo}>
                            <span className={styles.playIcon}>
                              <i className="far fa-play-circle"></i>
                            </span>
                            <span className={styles.videoTitle}>
                              The EC2 Compute AWS Service
                            </span>
                          </span>
                          <span className={styles.videoDuration}>02:44</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <button onClick={() => toggler(2)}>
                    <div className={styles.headInfo}>
                      <h4 className={styles.difficulty}>Professional</h4>
                      <span className={styles.duration}>
                        40 Total Lessons, 5 Hours Video
                      </span>
                    </div>
                    <div className={styles.rotate}>
                      <i
                        className={`fas fa-chevron-down ${
                          clicked === 2 && "fa-rotate-180"
                        }`}
                      ></i>
                    </div>
                  </button>

                  <div
                    className={`${styles.content} ${
                      clicked === 2 && styles.show
                    }`}
                  >
                    <h5 className={styles.subHead}>
                      <div>
                        <FolderSvg />
                      </div>
                      <span>Introduction to AWS</span>
                    </h5>

                    <ul className={styles.subPlaylist}>
                      <li>
                        <a>
                          <span className={styles.videoInfo}>
                            <span className={styles.playIcon}>
                              <i className="far fa-play-circle"></i>
                            </span>
                            <span className={styles.videoTitle}>
                              Getting Started
                            </span>
                          </span>
                          <span className={styles.videoDuration}>00:44</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className={styles.videoInfo}>
                            <span className={styles.playIcon}>
                              <i className="far fa-play-circle"></i>
                            </span>
                            <span className={styles.videoTitle}>
                              The EC2 Compute AWS Service
                            </span>
                          </span>
                          <span className={styles.videoDuration}>02:44</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <button onClick={() => toggler(3)}>
                    <div className={styles.headInfo}>
                      <h4 className={styles.difficulty}>Legend</h4>
                      <span className={styles.duration}>
                        40 Total Lessons, 5 Hours Video
                      </span>
                    </div>
                    <div className={styles.rotate}>
                      <i
                        className={`fas fa-chevron-down ${
                          clicked === 3 && "fa-rotate-180"
                        }`}
                      ></i>
                    </div>
                  </button>

                  <div
                    className={`${styles.content} ${
                      clicked === 3 && styles.show
                    }`}
                  >
                    <h5 className={styles.subHead}>
                      <div>
                        <FolderSvg />
                      </div>
                      <span>Introduction to AWS</span>
                    </h5>

                    <ul className={styles.subPlaylist}>
                      <li>
                        <a>
                          <span className={styles.videoInfo}>
                            <span className={styles.playIcon}>
                              <i className="far fa-play-circle"></i>
                            </span>
                            <span className={styles.videoTitle}>
                              Getting Started
                            </span>
                          </span>
                          <span className={styles.videoDuration}>00:44</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className={styles.videoInfo}>
                            <span className={styles.playIcon}>
                              <i className="far fa-play-circle"></i>
                            </span>
                            <span className={styles.videoTitle}>
                              The EC2 Compute AWS Service
                            </span>
                          </span>
                          <span className={styles.videoDuration}>02:44</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.course__verview__hero__img}>
            <img src="/images/video-img.png" alt="img" />

            <div className={styles.courseOverview__header__content2}>
              <h3 className={styles.courseOverview__header__content__title}>
                Instructor
              </h3>
              <div className={styles.profile__details}>
                <img src="/images/img-dp.png" alt="img" />
                <p>Daniel Kadiri</p>
              </div>
              <div className={styles.rating__wrapper}>
                <h3>Ratings</h3>
                <img src="/images/starss.png" alt="img" />
              </div>
              <div className={styles.learn}>
                <h3>What you’ll learn</h3>
                <div className={styles.learn__container}>
                  <img src="/images/ticked.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    suspendisse ac posuere elit. Arcu, facilisis nisl, integer
                    at amet, mauris sit sapien at.{" "}
                  </p>
                </div>

                <div className={styles.learn__container}>
                  <img src="/images/ticked.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    suspendisse ac posuere elit. Arcu, facilisis nisl, integer
                    at amet, mauris sit sapien at.{" "}
                  </p>
                </div>

                <div className={styles.learn__container}>
                  <img src="/images/ticked.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    suspendisse ac posuere elit. Arcu, facilisis nisl, integer
                    at amet, mauris sit sapien at.{" "}
                  </p>
                </div>

                <div className={styles.learn__container}>
                  <img src="/images/ticked.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    suspendisse ac posuere elit. Arcu, facilisis nisl, integer
                    at amet, mauris sit sapien at.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.course__overview__certification}>
          <RoleBase title="Related Certification Courses" />
        </div>
      </div>
    </>
  );
};

export default CourseOverview;
