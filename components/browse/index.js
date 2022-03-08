import React from "react";
import styles from "./styles.module.scss";
// import Input from "../ui/customInput";
import SearchInput from "../ui/customSearchInput";
import Filter from "./filter";
import Courses from "./courses";
import CourseCard from "../ui/courseCard";
import Outro from "../home/outro";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const BrowseIndex = () => {
  return (
    <div className={styles.browse}>
      <div className={styles.wrapper}>
        <div className={styles.browseHeader}>
          <p>A BROAD SELECTION OF COURSES</p>

          <h1>
            Over 20,000+ courses taught by industry experts to improve your
            skillset
          </h1>

          <div className={styles.searchWrapper}>
            <SearchInput
              type="text"
              innerLabel
              id="search"
              placeholder="What do you want to learn?"
            >
              <i className="far fa-search"></i>
            </SearchInput>
          </div>
        </div>

        <div className={styles.browseContent}>
          <Filter />

          <Courses />
        </div>
      </div>

      <div className={styles.popularCourses}>
        <h2>Popular Courses</h2>

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

      <Outro
        outroText="Keep yourself ahead by keeping up on your dream"
        outroBtn="TRY FOR FREE"
        outroLink="/register"
      />
    </div>
  );
};

export default BrowseIndex;
