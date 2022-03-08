import React from "react";
import styles from "./styles.module.scss";
import WebinarCard from "../../ui/webinarCard";

const interest = () => {
  return (
    <div className={styles.interest}>
      <div className={styles.wrapper}>
        <h2>You might be interested in</h2>

        <div className={styles.webinarGrid}>
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Designing for Human Accessibility in a friendly way"
            date="23-24 August"
            host="Mayowa Adegunwa, Falade Sunday"
            href="/webinars/123"
          />
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Human Centered Design 101: creating your style guide"
            date="23-24 August"
            host="Falade Sunday"
            href="/webinars/123"
          />
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Cloud Migration : The Do’s and Dont’s "
            date="25 September"
            host="Dr. Lucky Onoriode"
            href="/webinars/123"
          />
        </div>
      </div>
    </div>
  );
};

export default interest;
