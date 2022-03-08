import React from "react";
import styles from "./styles.module.scss";
import Video from "../ui/customVideo";
import Outro from "../home/outro";
import Content from "./content";

const courseIndex = () => {
  return (
    <div className={styles.course}>
      <div className={styles.wrapper}>
        <div className={styles.lead}>
          <h1>
            <img src="/images/aws-2 1.svg" />
            <span>Amazon Web Services</span>
          </h1>
          <p>
            Whether you're looking for compute power, database storage, content
            delivery, or other functionality, AWS has the services to help you
            build sophisticated applications with increased flexibility,
            scalability and reliability
          </p>

          <a href="/" className="btn-primary btn-medium">
            BROWSE AWS COURSES
          </a>
        </div>

        <Video wrapperClass={styles.previewVideo} />
      </div>

      <div className={styles.courseContent}>
        <Content />
      </div>

      <Outro
        outroText="Keep yourself ahead by keeping up on your dream"
        outroBtn="TRY FOR FREE"
        outroLink="/register"
      />
    </div>
  );
};

export default courseIndex;
