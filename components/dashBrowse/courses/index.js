import React from "react";
import styles from "./styles.module.scss";
import CourseCard from "../../ui/courseCard";
import LoadMore from "../../ui/loadMore";

const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.courseGrid}>
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/azure-course.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
      </div>

      <div className={styles.load}>
        <LoadMore />
      </div>
    </div>
  );
};

export default Courses;
