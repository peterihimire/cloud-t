import React from "react";
import RoleBase from "../dashboardPage/roleBase";
import styles from "./styles.module.scss";

const ProfilePage = () => {
  return (
    <div className={styles.profile__wrapper}>
      <div className={styles.profile_hero}></div>

      <div className={styles.profile_content_wrapper}>
        <div className={styles.profile_left}>
          <div className={styles.profile_content_left_wrapper}>
            <div className={styles.profile_content_left}>
              <img src='/images/profile-img.png' alt='img' />
              <div className={styles.profile_content_left_details}>
                <h1>FALADE SUNDAY</h1>
                <p>Product Designer</p>
              </div>
            </div>

            <div className={styles.profile_content_left_details1}>
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec leo
                sed egestas cras dignissim rhoncus laoreet pretium. Leo diam at
                in aliquam, egestas pharetra, lorem aenean congue. Sed et magna
                sagittis leo pellentesque mauris, odio iaculis vel. Iaculis
                justo non egestas magna ornare vulputate nascetur. Magna
                maecenas aliquet aliquam, in integer lectus. Risus sed in tellus
                sit nec et posuere mollis. Pulvinar viverra interdum ultrices
                bibendum a justo, sit scelerisque.
              </p>
            </div>
          </div>
          <div className={styles.profile_content_left_details2}>
            <h2>Industry Certification</h2>
            <p>Show off your certificate to a wider cloudticians community</p>
            <div className={styles.profile_content_left_details2_wrapper}>
              <div
                className={styles.profile_content_left_details2_certification}
              >
                <img
                  src='/images/Elemental Technologies Icon undefined.png'
                  alt='img'
                />
                <div
                  className={
                    styles.profile_content_left_details2_certification_img
                  }
                >
                  <h2>Junior Certified Cloud Associate</h2>
                  <h3>Amazon Web Services</h3>
                  <p>Issued May 2021 - No Expiration Date</p>
                  <p>Credential ID - AWS18938JGF27248H2BGJB01</p>
                </div>
              </div>

              <img src='/images/edit-icon.png' alt='img' />
            </div>

            <button>Add certificate</button>
          </div>

          <div className={styles.profile_content_left_details3}>
            <h2>Employment History</h2>
            <p>Show your work experience</p>
            <div className={styles.profile_content_left_details2_wrapper}>
              <div
                className={styles.profile_content_left_details2_certification}
              >
                <div className={styles.profile_content_history}>
                  <h2>Senior DevOps Engineer</h2>
                  <h3>Cloudfift Inc.</h3>
                  <p>May 2021 - Till Date</p>
                </div>
              </div>

              <img src='/images/edit-icon.png' alt='img' />
            </div>

            <button>Add Employment</button>
          </div>
        </div>
        <div className={styles.profile_content_right}>
          <div className={styles.profile_content_right_btns}>
            <button>EDIT PROFILE</button>
            <button>Settings</button>
            <button>share</button>
          </div>

          <div className={styles.profile_content_right_details1}>
            <h2>Current Plan</h2>
            <p>Personal Basic</p>

            <h2 className={styles.profile_special}>Billing Cycle</h2>
            <p>$35 Billed Monthly</p>
            <h3>No next billing date for this plan</h3>

            <div className={styles.profile_cta_details1}>
              <button>UPGRADE PLAN</button>
              <p>*Taxes may apply</p>
            </div>
          </div>

          <div className={styles.profile_content_right_details2}>
            <h2>Community Engagement</h2>
            <p>
              Reputation points I've earned for helping the community in
              answering questions on the ACG forums.
            </p>

            <div className={styles.profile_cta_details1}>
              <h1>0</h1>
              <p>Questions Posted</p>
            </div>

            <div className={styles.profile_cta_details1}>
              <h1>0</h1>
              <p>Answers Posted</p>
            </div>
          </div>

          <div className={styles.profile_content_right_details3}>
            <h2>Badges</h2>
            <div className={styles.profile_medals}>
              <img src='/images/medal 1.png' alt='medal' />
              <img src='/images/medal 1.png' alt='medal' />
              <img src='/images/medal 1.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
              <img src='/images/medal 4.png' alt='medal' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile_content_bottom}>
        <RoleBase title='Completed Courses' />
      </div>
    </div>
  );
};

export default ProfilePage;
