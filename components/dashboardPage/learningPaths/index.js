import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const LearningPaths = () => {
  return (
    <div className={styles.learningPaths}>
      <div className={styles.wrapper}>
        <h2>Learning Paths</h2>

        <div className={styles.grid}>
          <Swiper
            spaceBetween={22}
            slidesPerView={"auto"}
            navigation
            className={`swiper-wrapper ${styles.slideWrapper}`}
          >
            <SwiperSlide>
              <Link href="/courses/salesforce">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/popcourse.svg" />
                  </div>
                  <p>Microsoft Azure</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/aws">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/linux.svg" />
                  </div>
                  <p>Linux</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/digital-ocean">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/google-cloud.svg" />
                  </div>
                  <p>Google Cloud</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/linux">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/aws-1.svg" />
                  </div>
                  <p>Amazon AWS</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/azure">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/popcourse.svg" />
                  </div>
                  <p>Microsoft Azure</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/sap">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/linux.svg" />
                  </div>
                  <p>Linux</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/alibaba-cloud">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/linux.svg" />
                  </div>
                  <p>Linux</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/ibm-cloud">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/aws-1.svg" />
                  </div>
                  <p>Amazon AWS</p>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/courses/ibm-cloud">
                <a className={styles.courseCard}>
                  <div>
                    <img alt="" src="/images/aws-1.svg" />
                  </div>
                  <p>Amazon AWS</p>
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
