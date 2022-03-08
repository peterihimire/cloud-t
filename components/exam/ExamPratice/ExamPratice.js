import React from "react";
import styles from "./styles.module.scss";

const ExamPratice = () => {
  return (
    <div className={styles.Exam_pratice_wrapper}>
      <div className={styles.exam_pratice__header}>
        <img src='/images/Cloudtician Logo.png' alt='logo' />
        <h5>Practice Mode</h5>
      </div>

      <div className={styles.exam_breakdown_wrapper}>
        <div className={styles.exam_breakdown_title}>
          <h3>Virtualization and High Availability</h3>
          <p>Virtualization Concepts and Theory</p>
        </div>
        <div className={styles.exam_breakdown_content}>
          <p>
            <span>12:04:60 </span>{" "}
            <span className={styles.exam_left_content}>Left</span>
          </p>
          <button>FINISH EXAM</button>
        </div>
      </div>

      <div className={styles.exam_breakdown_wrapper_two}>
        <div className={styles.exam_breakdown_first_div}>
          <h3>Question 1</h3>
          <p>
            This exam will test your knowledge on the LPIC-3 304: Virtualization
            and High Availability course. All of the topics covered in this
            course may appear on the exam. The exam is designed to prepare you
            for the actual LPIC-3 304 exam. The format consists of 60 multiple
            choice questions (single and multiple answer). Please read each
            question carefully and answer to the best of your knowledge.
          </p>
          <div className={styles.exam_options}>
            <div className={styles.exam_options_first}>
              <p>A. Lorem Ipsum is the correct answer</p>
            </div>
            <div className={styles.exam_options_first}>
              <p>B. Lorem Ipsum is the correct answer</p>
            </div>
            <div className={styles.exam_options_first}>
              <p>C. Lorem Ipsum is the correct answer</p>
            </div>
            <div className={styles.exam_options_first}>
              <p>D. Lorem Ipsum is the correct answer</p>
            </div>

            <div className={styles.exam_options_cta_btn}>
              <button className={styles.exam_options_cta_btn1}>NEXT</button>
              <button className={styles.exam_options_cta_btn2}>SKIP</button>
            </div>
          </div>
        </div>

        <div className={styles.exam_breakdown_second_div}>
          <div className={styles.exam_marks_hightlight}>
            <div className={styles.exam_marks_skipped_wrapper}>
              <div className={styles.exam_marks_skipped}></div>
              <p>Skipped</p>
            </div>

            <div className={styles.exam_marks_skipped_wrapper}>
              <div className={styles.exam_marks_answered}></div>
              <p>Answered</p>
            </div>

            <div className={styles.exam_marks_skipped_wrapper}>
              <div className={styles.exam_marks_unanswered}></div>
              <p>Unanswered</p>
            </div>
          </div>

          <div className={styles.exam_marks_done_wrapper}>
            <div className={styles.exam_marks_skipped}>1</div>
            <div className={styles.exam_marks_skipped}>2</div>
            <div className={styles.exam_marks_skipped}>3</div>
            <div className={styles.exam_marks_skipped}>4</div>
            <div className={styles.exam_marks_skipped}>5</div>
            <div className={styles.exam_marks_answered}>6</div>
            <div className={styles.exam_marks_answered}>7</div>
            <div className={styles.exam_marks_answered}>8</div>
            <div className={styles.exam_marks_answered}>9</div>
            <div className={styles.exam_marks_answered}>10</div>
            <div className={styles.exam_marks_answered}>11</div>
            <div className={styles.exam_marks_answered}>12</div>
            <div className={styles.exam_marks_answered}>13</div>
            <div className={styles.exam_marks_skipped}>6</div>
            <div className={styles.exam_marks_skipped}>7</div>
            <div className={styles.exam_marks_skipped}>8</div>
            <div className={styles.exam_marks_skipped}>9</div>
            <div className={styles.exam_marks_unanswered}>14</div>
            <div className={styles.exam_marks_unanswered}>15</div>
            <div className={styles.exam_marks_unanswered}>16</div>
            <div className={styles.exam_marks_unanswered}>17</div>
            <div className={styles.exam_marks_unanswered}>18</div>
            <div className={styles.exam_marks_unanswered}>19</div>
            <div className={styles.exam_marks_unanswered}>20</div>
            <div className={styles.exam_marks_unanswered}>21</div>
            <div className={styles.exam_marks_unanswered}>22</div>
            <div className={styles.exam_marks_unanswered}>23</div>
            <div className={styles.exam_marks_skipped}>1</div>
            <div className={styles.exam_marks_skipped}>2</div>
            <div className={styles.exam_marks_skipped}>3</div>
            <div className={styles.exam_marks_skipped}>4</div>
            <div className={styles.exam_marks_skipped}>5</div>
            <div className={styles.exam_marks_answered}>6</div>
            <div className={styles.exam_marks_answered}>7</div>
            <div className={styles.exam_marks_answered}>8</div>
            <div className={styles.exam_marks_answered}>9</div>
            <div className={styles.exam_marks_answered}>10</div>
            <div className={styles.exam_marks_answered}>11</div>
            <div className={styles.exam_marks_answered}>12</div>
            <div className={styles.exam_marks_answered}>13</div>
            <div className={styles.exam_marks_skipped}>6</div>
            <div className={styles.exam_marks_skipped}>7</div>
            <div className={styles.exam_marks_skipped}>8</div>
            <div className={styles.exam_marks_skipped}>9</div>
            <div className={styles.exam_marks_unanswered}>14</div>
            <div className={styles.exam_marks_unanswered}>15</div>
            <div className={styles.exam_marks_unanswered}>16</div>
            <div className={styles.exam_marks_unanswered}>17</div>
            <div className={styles.exam_marks_unanswered}>18</div>
            <div className={styles.exam_marks_unanswered}>19</div>
            <div className={styles.exam_marks_unanswered}>20</div>
            <div className={styles.exam_marks_unanswered}>21</div>
            <div className={styles.exam_marks_unanswered}>22</div>
            <div className={styles.exam_marks_unanswered}>23</div>
            <div className={styles.exam_marks_skipped}>1</div>
            <div className={styles.exam_marks_skipped}>2</div>
            <div className={styles.exam_marks_skipped}>3</div>
            <div className={styles.exam_marks_skipped}>4</div>
            <div className={styles.exam_marks_skipped}>5</div>
            <div className={styles.exam_marks_answered}>6</div>
            <div className={styles.exam_marks_answered}>7</div>
            <div className={styles.exam_marks_answered}>8</div>
            <div className={styles.exam_marks_answered}>9</div>
            <div className={styles.exam_marks_answered}>10</div>
            <div className={styles.exam_marks_answered}>11</div>
            <div className={styles.exam_marks_answered}>12</div>
            <div className={styles.exam_marks_answered}>13</div>
            <div className={styles.exam_marks_skipped}>6</div>
            <div className={styles.exam_marks_skipped}>7</div>
            <div className={styles.exam_marks_skipped}>8</div>
            <div className={styles.exam_marks_skipped}>9</div>
            <div className={styles.exam_marks_unanswered}>14</div>
            <div className={styles.exam_marks_unanswered}>15</div>
            <div className={styles.exam_marks_unanswered}>16</div>
            <div className={styles.exam_marks_unanswered}>17</div>
            <div className={styles.exam_marks_unanswered}>18</div>
            <div className={styles.exam_marks_unanswered}>19</div>
            <div className={styles.exam_marks_unanswered}>20</div>
            <div className={styles.exam_marks_unanswered}>21</div>
            <div className={styles.exam_marks_unanswered}>22</div>
            <div className={styles.exam_marks_unanswered}>23</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPratice;
