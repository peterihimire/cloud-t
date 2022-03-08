import React from "react";
import styles from "./styles.module.scss";
import CourseCard from "../../ui/courseCard";
import CertCourseCard from "../../ui/certCourseCard";
import InstructorCard from "../../ui/instructorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentIntro}>
        <p>
          Expand your AWS cloud skills with our constantly-updated AWS training
          and online course library. Whether you’re just finding your footing,
          interested in AWS certification training, or looking to go deep into
          advanced AWS course topics like serverless and machine learning, we’ve
          got you covered. Our digital courses get you hands-on with the cloud
          technology to reinforce concepts with real-world experience, and our
          engaging instructors make it easy to stay motivated, keep moving, and
          have some fun along the way.
        </p>
      </div>

      <div className={styles.learn}>
        <h3>What you will learn</h3>

        <div className={styles.learnGrid}>
          <div className={styles.learnInfo}>
            <div className={styles.learnCheck}>
              <i className="far fa-check"></i>
            </div>
            <div className={styles.learnContext}>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur .
              </p>
            </div>
          </div>
          <div className={styles.learnInfo}>
            <div className={styles.learnCheck}>
              <i className="far fa-check"></i>
            </div>
            <div className={styles.learnContext}>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur .
              </p>
            </div>
          </div>
          <div className={styles.learnInfo}>
            <div className={styles.learnCheck}>
              <i className="far fa-check"></i>
            </div>
            <div className={styles.learnContext}>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur .
              </p>
            </div>
          </div>
          <div className={styles.learnInfo}>
            <div className={styles.learnCheck}>
              <i className="far fa-check"></i>
            </div>
            <div className={styles.learnContext}>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.requirements}>
        <h3>Requirements</h3>

        <div className={styles.reqGrid}>
          <div className={styles.reqInfo}>
            <div className={styles.reqCheck}>
              <i className="far fa-check"></i>
            </div>
            <div className={styles.reqContext}>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur .
              </p>
            </div>
          </div>
          <div className={styles.reqInfo}>
            <div className={styles.reqCheck}>
              <i className="far fa-check"></i>
            </div>
            <div className={styles.reqContext}>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.coursesSection}>
        <h3>Courses on AWS</h3>

        <div className={`${styles.coursesList}`}>
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            // autoHeight={true}
            navigation
            className={`swiper-wrapper ${styles.slideWrapper}`}
          >
            <SwiperSlide>
              <CourseCard
                alt=""
                src="/images/aws-course-img.png"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
                title="Ultimate aWS Certified solutions architect associate 2021"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                alt=""
                src="/images/aws-course-img.png"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
                title="Ultimate aWS Certified solutions architect associate 2021"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                alt=""
                src="/images/aws-course-img.png"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
                title="Ultimate aWS Certified solutions architect associate 2021"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                alt=""
                src="/images/aws-course-img.png"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
                title="Ultimate aWS Certified solutions architect associate 2021"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                alt=""
                src="/images/aws-course-img.png"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
                title="Ultimate aWS Certified solutions architect associate 2021"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                alt=""
                src="/images/aws-course-img.png"
                multiple
                enrolls="1,200"
                rating="4.8"
                ratingNumber="108,201"
                title="Ultimate aWS Certified solutions architect associate 2021"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <a href="/" className="btn-medium btn-transparent">
          BROWSE ALL AWS COURSES <i className="far fa-chevron-right"></i>
        </a>
      </div>

      <div className={styles.certSection}>
        <h3>AWS Certification Courses</h3>

        <div className={styles.certList}>
          <CertCourseCard
            alt=""
            src="/images/certs.png"
            title="AWS Certified SysOps Administrator - Associate 2020"
          />
          <CertCourseCard
            alt=""
            src="/images/cert2.png"
            title="AWS Certified Developer - Associate 2020"
          />
          <CertCourseCard
            alt=""
            src="/images/certs.png"
            title="AWS Certified SysOps Administrator - Associate 2020"
          />
          <CertCourseCard
            alt=""
            src="/images/cert2.png"
            title="AWS Certified Developer - Associate 2020"
          />
        </div>
      </div>

      <div className={styles.instSection}>
        <h3>Meet some of the Instructors</h3>

        <div className={`${styles.instList}`}>
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            // autoHeight={true}
            navigation
            className={`swiper-wrapper ${styles.slideWrapper}`}
            // breakpoints={{
            //   400: {
            //     slidesPerView: 1,
            //   }
            // }}
          >
            <SwiperSlide>
              <InstructorCard
                alt=""
                src="/images/instructor.png"
                title="Beauty Lane"
                role="Lead Instructor"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </SwiperSlide>
            <SwiperSlide>
              <InstructorCard
                alt=""
                src="/images/instructor.png"
                title="Beauty Lane"
                role="Lead Instructor"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </SwiperSlide>
            <SwiperSlide>
              <InstructorCard
                alt=""
                src="/images/instructor.png"
                title="Beauty Lane"
                role="Lead Instructor"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </SwiperSlide>
            <SwiperSlide>
              <InstructorCard
                alt=""
                src="/images/instructor.png"
                title="Beauty Lane"
                role="Lead Instructor"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </SwiperSlide>
            <SwiperSlide>
              <InstructorCard
                alt=""
                src="/images/instructor.png"
                title="Beauty Lane"
                role="Lead Instructor"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </SwiperSlide>
            <SwiperSlide>
              <InstructorCard
                alt=""
                src="/images/instructor.png"
                title="Beauty Lane"
                role="Lead Instructor"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default content;
