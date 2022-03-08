import React from "react";
import styles from "./styles.module.scss";

const playlist = () => {
  const collapseToggler = (e) => {
    e.currentTarget.nextSibling.classList.toggle(styles.show);
    e.currentTarget
      .querySelector(".fa-chevron-down")
      .classList.toggle("fa-rotate-180");
  };

  return (
    <ul className={styles.playlist}>
      <li>
        <button onClick={collapseToggler}>
          <span>01- Introduction to AWS Basics</span>
          <i className="far fa-chevron-down"></i>
        </button>

        <div className={styles.videos}>
          <a>
            <span className={styles.videoInfo}>
              <span className={styles.playIcon}>
                <i className="far fa-play-circle"></i>
              </span>
              <span className={styles.videoTitle}>Getting Started</span>
            </span>
            <span className={styles.videoDuration}>00:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
        </div>
      </li>

      <li>
        <button onClick={collapseToggler}>
          <span>02- Working with Lamda</span>
          <i className="far fa-chevron-down"></i>
        </button>

        <div className={styles.videos}>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>Getting Started</span>
            </span>
            <span className={styles.videoDuration}>00:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
        </div>
      </li>

      <li>
        <button onClick={collapseToggler}>
          <span>03- Working with Lamda</span>
          <i className="far fa-chevron-down"></i>
        </button>

        <div className={styles.videos}>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>Getting Started</span>
            </span>
            <span className={styles.videoDuration}>00:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
        </div>
      </li>

      <li>
        <button onClick={collapseToggler}>
          <span>04- Working with Lamda</span>
          <i className="far fa-chevron-down"></i>
        </button>

        <div className={styles.videos}>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>Getting Started</span>
            </span>
            <span className={styles.videoDuration}>00:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
        </div>
      </li>

      <li>
        <button onClick={collapseToggler}>
          <span>05- Working with Lamda</span>
          <i className="far fa-chevron-down"></i>
        </button>

        <div className={styles.videos}>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>Getting Started</span>
            </span>
            <span className={styles.videoDuration}>00:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
        </div>
      </li>

      <li>
        <button onClick={collapseToggler}>
          <span>06- Working with Lamda</span>
          <i className="far fa-chevron-down"></i>
        </button>

        <div className={styles.videos}>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>Getting Started</span>
            </span>
            <span className={styles.videoDuration}>00:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
        </div>
      </li>

      <li>
        <button onClick={collapseToggler}>
          <span>07- Working with Lamda</span>
          <i className="far fa-chevron-down"></i>
        </button>

        <div className={styles.videos}>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>Getting Started</span>
            </span>
            <span className={styles.videoDuration}>00:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
          <a>
            <span className={styles.videoInfo}>
              <span className={`${styles.playIcon} ${styles.noBorder}`}>
                <i className="far fa-lock"></i>
              </span>
              <span className={styles.videoTitle}>
                The EC2 Compute AWS Service
              </span>
            </span>
            <span className={styles.videoDuration}>02:44</span>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default playlist;
