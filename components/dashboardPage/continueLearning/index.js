import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import LearningCard from "../../ui/learningCard";

SwiperCore.use([Navigation]);

const ContinueLearning = () => {
  return (
    <div className={styles.continueLearning}>
      <div className={styles.wrapper}>
        <h2>Continue Learning</h2>

        <Swiper
          spaceBetween={20}
          // slidesPerView={1.7}
          navigation
          className={`swiper-wrapper ${styles.slideWrapper}`}
          breakpoints={{
            700: {
              slidesPerView: 1.1,
            },
            903: {
              slidesPerView: 1.4,
            },
            1200: {
              slidesPerView: 1.7,
            },
          }}
        >
          <SwiperSlide>
            <LearningCard
              alt=""
              src="/images/course2.png"
              title="Ultimate AWS Certified solutions architect associate 2021"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
              amet, mauris sit sapien at."
              tutor="Daniel Kadiri"
              duration="1hrs"
              percentage={72}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LearningCard
              alt=""
              src="/images/course2.png"
              title="Ultimate AWS Certified solutions architect associate 2021"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
              amet, mauris sit sapien at."
              tutor="Daniel Kadiri"
              duration="1hrs"
              percentage={72}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ContinueLearning;
