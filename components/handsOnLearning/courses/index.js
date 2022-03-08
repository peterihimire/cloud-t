import React from "react";
import styles from "./styles.module.scss";
import CourseCard from "../../ui/courseCard";
import Pagination from "../../ui/pagination";

const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.courseGrid}>
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
        />
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
        />
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
        />
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
        />
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
        />
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
        />
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
        />
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
        />
        <CourseCard
          src="/images/learningCourse.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
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
  );
};

export default Courses;
