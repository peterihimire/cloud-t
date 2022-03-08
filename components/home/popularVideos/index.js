import React from "react";
import styles from "./styles.module.scss";
import CourseCard from "../../ui/courseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const popularVideos = () => {
  return (
    <section className={styles.popVideos}>
      <div className={styles.wrapper}>
        <h3>POPULAR VIDEOS</h3>

        <h2>Courses cloudticians are currently engaged with</h2>

        <div className={styles.coursesCarousel}>
          <Swiper
            spaceBetween={20}
            // autoHeight={true}
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
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/pop-video.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/pop-video.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/pop-video.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/pop-video.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                enrolls="Priscilla Aimilla"
                rating="4.8"
                ratingNumber="108,201"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/pop-video.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                href="/"
                src="/images/pop-video.png"
                alt=""
                title="Ultimate AWS Certified Solutions Architect Associate 2021"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default popularVideos;
