import React, { useState } from "react";
import styles from "./styles.module.scss";
import CheckedSvg from "../../../../public/images/orange-checked.svg";
import FolderSvg from "../../../../public/images/folder.svg";

const OverviewDesc = () => {
  const [clicked, setClicked] = useState(0);

  const toggler = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <>
      <div className={styles.overviewDesc}>
        <div className={styles.desc}>
          <h2>Description</h2>
          <p className={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat urna,
            sed penatibus vel nisl vitae vel consectetur bibendum. Mattis ornare
            vitae scelerisque dignissim lorem massa ultrices euismod bibendum.
            Tincidunt nisi morbi euismod donec praesent sagittis ultrices est.
            Faucibus adipiscing scelerisque faucibus phasellus risus sed. Eu
            maecenas luctus neque, cursus congue nunc. Sed eget et aliquet nam
            nunc tellus, ornare ullamcorper. Sit accumsan tortor, tempus sit.
            <br />
            Nullam at ultrices dictum ut eget aliquet gravida. Quis lacus in
            semper in nisl. Nulla vel eget dui, eget. Faucibus at augue ipsum
            vitae nec quis hendrerit. Pellentesque egestas pellentesque
            scelerisque vitae ac lobortis vitae a sed. Venenatis pellentesque
            blandit amet odio mattis diam, donec purus, posuere. Integer
            fermentum, massa volutpat diam leo neque urna ultricies nulla.
            Euismod magnis pellentesque quam venenatis, rutrum semper. Mi id a
            morbi massa mauris felis, euismod a ullamcorper. Gravida consectetur
            egestas a neque habitant tincidunt lorem. Mauris consectetur morbi
            sit convallis.
          </p>
        </div>

        <div className={styles.learn}>
          <h2>What you’ll learn</h2>
          <ul className={styles.learnList}>
            <li>
              <div className={styles.icon}>
                <CheckedSvg />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                amet, mauris sit sapien at.{" "}
              </p>
            </li>
            <li>
              <div className={styles.icon}>
                <CheckedSvg />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                amet, mauris sit sapien at.{" "}
              </p>
            </li>
            <li>
              <div className={styles.icon}>
                <CheckedSvg />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                amet, mauris sit sapien at.{" "}
              </p>
            </li>
          </ul>
        </div>
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
              className={`${styles.content} ${clicked === 0 && styles.show}`}
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
                      <span className={styles.videoTitle}>Getting Started</span>
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
              className={`${styles.content} ${clicked === 1 && styles.show}`}
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
                      <span className={styles.videoTitle}>Getting Started</span>
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
              className={`${styles.content} ${clicked === 2 && styles.show}`}
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
                      <span className={styles.videoTitle}>Getting Started</span>
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
              className={`${styles.content} ${clicked === 3 && styles.show}`}
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
                      <span className={styles.videoTitle}>Getting Started</span>
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
    </>
  );
};

export default OverviewDesc;
