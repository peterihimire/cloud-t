import React from "react";
import styles from "./styles.module.scss";
import CourseCard from "../../ui/courseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Trending = () => {
  return (
    <div className={styles.trending}>
      <div className={styles.wrapper}>
        <h2>Trending Courses</h2>

        <div className={styles.carousel}>
          <Swiper
            spaceBetween={20}
            className={`swiper-wrapper ${styles.slideWrapper}`}
            navigation
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              700: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4.16,
              },
            }}
          >
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/course1.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                enrolls="Daniel Kadiri"
                rating="4.8"
                ratingNumber="108,201"
                bordered
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/course1.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                enrolls="Daniel Kadiri"
                rating="4.8"
                ratingNumber="108,201"
                bordered
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/course1.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                enrolls="Daniel Kadiri"
                rating="4.8"
                ratingNumber="108,201"
                bordered
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/course1.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                enrolls="Daniel Kadiri"
                rating="4.8"
                ratingNumber="108,201"
                bordered
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/course1.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                enrolls="Daniel Kadiri"
                rating="4.8"
                ratingNumber="108,201"
                bordered
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/course1.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                enrolls="Daniel Kadiri"
                rating="4.8"
                ratingNumber="108,201"
                bordered
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trending;
