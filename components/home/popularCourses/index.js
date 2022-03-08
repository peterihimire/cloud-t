import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const popularCourses = () => {
  return (
    <section className={styles.popularCourses}>
      <div className={styles.wrapper}>
        <h2>A BROAD SELECTION OF POPULAR COURSES</h2>

        <div className={`${styles.popularGrid}`}>
          {/* the link will be dynamic, something like /courses/{courseName || courseId} */}
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            // autoHeight={true}
            navigation
            className={`swiper-wrapper ${styles.slideWrapper}`}
          >
            <SwiperSlide>
              <Link href="/courses/salesforce">
                <a className={styles.courseCard}>
                  <img alt="" src="/images/popcourse.svg" />
                  <p>Salesforce</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/aws">
                <a className={styles.courseCard}>
                  <img alt="" src="/images/popcourse.svg" />
                  <p>AWS</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/digital-ocean">
                <a className={styles.courseCard}>
                  <img alt="" src="/images/popcourse.svg" />
                  <p>Digital Ocean</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/linux">
                <a className={styles.courseCard}>
                  <img alt="" src="/images/popcourse.svg" />
                  <p>Linux</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/azure">
                <a className={styles.courseCard}>
                  <img alt="" src="/images/popcourse.svg" />
                  <p>Azure</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/sap">
                <a className={styles.courseCard}>
                  <img alt="" src="/images/popcourse.svg" />
                  <p>SAP</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/alibaba-cloud">
                <a className={styles.courseCard}>
                  <img alt="" src="/images/popcourse.svg" />
                  <p>Alibaba Cloud</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/ibm-cloud">
                <a className={styles.courseCard}>
                  <img alt="" src="/images/popcourse.svg" />
                  <p>IBM Cloud</p>
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default popularCourses;
