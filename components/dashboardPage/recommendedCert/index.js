import React, { useState } from "react";
import styles from "./styles.module.scss";
import CustomTabs from "../../ui/tabs";
import CourseCard from "../../ui/courseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const RecommendedCert = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "AWS",
      id: 1,
    },
    {
      name: "LINUX",
      id: 2,
    },
    {
      name: "GOOGLE CLOUD",
      id: 3,
    },
    {
      name: "MICROSOFT AZURE",
      id: 4,
    },
    {
      name: "MICROSOFT AZURE",
      id: 5,
    },
  ];

  return (
    <div className={styles.recommendedCert}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Recommended Certification Courses</h2>
        </div>

        <CustomTabs
          activeTab={tabIndex}
          clicked={(index) => tabIndexHandler(index)}
          headers={tabHeaders}
          dot
        >
          <div className={styles.tabContent}>
            {tabIndex === 1 && (
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
            )}
          </div>
        </CustomTabs>
      </div>
    </div>
  );
};

export default RecommendedCert;
