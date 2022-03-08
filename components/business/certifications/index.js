import React from "react";
import styles from "./styles.module.scss";
import CertCard from "../../ui/certCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const certifications = () => {
  return (
    <div className={styles.certification}>
      <div className={styles.wrapper}>
        <p className={styles.paraLead}>TRENDING COURSES</p>
        <h2>Top certification courses for Buinesses</h2>

        <Swiper
          spaceBetween={20}
          autoHeight={true}
          // slidesPerView={'auto'}
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
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <CertCard
              href="/"
              alt=""
              src="/images/certs.png"
              title="AWS Certification Training"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertCard
              href="/"
              alt=""
              src="/images/certs.png"
              title="AWS Certification Training"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertCard
              href="/"
              alt=""
              src="/images/certs.png"
              title="AWS Certification Training"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertCard
              href="/"
              alt=""
              src="/images/certs.png"
              title="AWS Certification Training"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertCard
              href="/"
              alt=""
              src="/images/certs.png"
              title="AWS Certification Training"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertCard
              href="/"
              alt=""
              src="/images/certs.png"
              title="AWS Certification Training"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default certifications;
