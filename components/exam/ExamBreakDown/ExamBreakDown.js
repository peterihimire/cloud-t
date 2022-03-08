import React from "react";
import styles from "./styles.module.scss";

const ExamBreakDown = () => {
  return (
    <div className={styles.examBreakDown}>
      <div className={styles.exam_pratice_header_cta}>
        <p>
          <img src='/images/Vector.png' alt='img' />
          <span>Back to Dashboard</span>
        </p>
        <img src='/images/Cloudtician Logo.png' alt='logo' />
      </div>
      <div className={styles.exam_breakdown_wrapper}>
        <h3>Practice Exams</h3>
        <div className={styles.exam_breakdown_header}>
          <div className={styles.exam_breakdown_header_title}>
            <h1>Virtualization and High Availability</h1>
          </div>
          <div className={styles.exam_breakdown_header_button}>
            <button className={styles.btn__cta}>Start Now</button>
          </div>
        </div>

        <div className={styles.exam_breakdown_time}>
          <p className={styles.exam_breakdown_time_left}>
            Time:
            <span>30 Minutes</span>
          </p>
          <p className={styles.exam_breakdown_time_left}>
            Questions:
            <span>30 Minutes</span>
          </p>
          <p className={styles.exam_breakdown_time_left}>
            Attempts:
            <span>30 Minutes</span>
          </p>
        </div>

        <div className={styles.exam_breakdown_questions}>
          <p className={styles.exam_breakdown_questions_item}>
            This exam will test your knowledge on the LPIC-3 304: Virtualization
            and High Availability course. All of the topics covered in this
            course may appear on the exam. The exam is designed to prepare you
            for the actual LPIC-3 304 exam. The format consists of 60 multiple
            choice questions (single and multiple answer). Please read each
            question carefully and answer to the best of your knowledge.
          </p>
        </div>

        <div className={styles.exam_breakdown_answer}>
          <h2 className={styles.exam_breakdown_answer_item}>EXAM BREAKDOWN</h2>

          <div className={styles.exam_breakdown_answer_content}>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
            <p>
              <span>Virtualization Concepts and Theory</span> <span>15%</span>
            </p>
          </div>
        </div>

        <div className={styles.exam_breakdown_answer}>
          <h2 className={styles.exam_breakdown_answer_item}>
            ATTEMPTS HISTORY
          </h2>

          <div className={styles.exam_breakdown_answer_content}>
            <p>
              <span>October 20,2021 10:04:21PM</span>{" "}
              <a href='#/' className={styles.special_link}>
                SEE PERFORMANCE
              </a>
            </p>
            <p>
              <span>October 20,2021 10:04:21PM</span>{" "}
              <a href='#/' className={styles.special_link}>
                SEE PERFORMANCE
              </a>
            </p>
            <p>
              <span>October 20,2021 10:04:21PM</span>{" "}
              <a href='#/' className={styles.special_link}>
                SEE PERFORMANCE
              </a>
            </p>
            <p>
              <span>October 20,2021 10:04:21PM</span>{" "}
              <a href='#/' className={styles.special_link}>
                SEE PERFORMANCE
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamBreakDown;
