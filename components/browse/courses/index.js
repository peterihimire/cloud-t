import React from "react";
import styles from "./styles.module.scss";
import CourseCard from "../../ui/courseCard";
import Pagination from "../../ui/pagination";
import Select from "../../ui/customSelect";

const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.coursesHeader}>
        <h2>Browse</h2>

        <Select sort defaultValue="" wrapClass={styles.sortDrop}>
          <option value="">SORT BY</option>
          <option value="Platform">PLATFORM</option>
          <option value="Services">SERVICES</option>
          <option value="Skills">SKILLS</option>
        </Select>
      </div>

      <div className={styles.courseGrid}>
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
        <CourseCard
          src="/images/pop-video.png"
          title="Ultimate AWS Certified solutions architect associate 2021"
          enrolls="Daniel Kadiri"
          rating={4.8}
          ratingNumber="108,201"
          alt=""
          href="/"
          bordered
        />
      </div>

      <Pagination
        containerClassName="pagination"
        pageCount={20}
        activeClassName="paginate-active"
        disabledClassName="paginate-disabled"
        previousClassName="paginate-previous"
        nextClassName="paginate-next"
      />
    </div>
  );
};

export default Courses;
