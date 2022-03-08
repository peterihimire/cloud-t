import React from "react";
import styles from "./styles.module.scss";
import InsightPopularCard from "../ui/insightPopularCard";
import Input from "../ui/customInput";

const insightsRead = () => {
  return (
    <div className={styles.insightsRead}>
      <div className={styles.wrapper}>
        <p className={styles.paraLead}>TECHNOLOGY</p>
        <h1>The Cloud Path: Engineering the pathway to success</h1>
        <p className={styles.paraDate}>August 12, 2021</p>

        <div className={styles.insightsImg}>
          <img alt="" src="/images/insightsBig.png" />
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detailsWrapper}>
          <p className={styles.intro}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac
            posuere in a adipiscing posuere nulla aliquam. Velit a pellentesque
            pharetra sed augue vestibulum ornare. At vel non nisl pulvinar
            cursus malesuada sagittis, morbi egestas. Et sed non vulputate
            facilisis cursus. At aliquam dictumst dolor, ullamcorper. Vel
            pulvinar sodales elit eget faucibus enim. Amet, mauris, quam odio
            feugiat nunc. Donec semper id enim diam. Vel ac amet quis urna nam
            id mi. Habitasse aliquam risus et consectetur accumsan nibh non.
            Commodo lacus hendrerit lobortis sit.
          </p>

          <h2>The Real Deal</h2>

          <div className={styles.mainRead}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac
              posuere in a adipiscing posuere nulla aliquam. Velit a
              pellentesque pharetra sed augue vestibulum ornare. At vel non nisl
              pulvinar cursus malesuada sagittis, morbi egestas. Et sed non
              vulputate facilisis cursus. At aliquam dictumst dolor,
              ullamcorper. Vel pulvinar sodales elit eget faucibus enim. Amet,
              mauris, quam odio feugiat nunc. Donec semper id enim diam. Vel ac
              amet quis urna nam id mi. Habitasse aliquam risus et consectetur
              accumsan nibh non. Commodo lacus hendrerit lobortis sit. <br />{" "}
              <br /> Sit tempus mauris hac venenatis nisl aenean maecenas morbi.
              Nisl mollis auctor sodales morbi faucibus tincidunt. Cras
              vestibulum metus congue feugiat. Gravida neque gravida quam
              viverra ac enim duis. Fames odio euismod justo, vestibulum
              consequat augue. Quam pellentesque ut in purus, leo neque. Nisl
              tincidunt id ullamcorper odio interdum. Pellentesque massa pretium
              dignissim in. Molestie sed arcu, risus lectus egestas purus. Ipsum
              pellentesque sem cursus ut ullamcorper est magna blandit. Dui
              faucibus velit nibh a natoque in cras augue lectus. <br /> <br />{" "}
              Vel massa id sollicitudin quis fringilla. Vivamus netus sit urna
              sit pretium sit. Nisl laoreet lectus accumsan ut magna arcu sed
              quis. Risus, rhoncus fermentum ut rhoncus ac nullam tortor ornare.
              Dignissim massa justo, dapibus fermentum, tortor. Cras egestas
              mauris diam sed. Aliquam velit suscipit mauris id in auctor
              ultrices congue nisl. Pellentesque in turpis tellus lectus varius.
              Diam lorem ut ornare egestas vitae, volutpat lectus sed. Laoreet
              nunc purus faucibus condimentum vulputate egestas. Sit in
              tincidunt lorem turpis curabitur.
            </p>
            <hr></hr>
            <hr></hr>
          </div>
        </div>
      </div>

      <div className={styles.popular}>
        <div className={styles.popularWrapper}>
          <h2>Most Popular</h2>

          <div className={styles.popularGrid}>
            <InsightPopularCard
              link="/insights/123"
              alt=""
              src="/images/insight-popular.png"
              title="The Cloud Path: Engineering the pathway to success"
              label="Technology"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada nibh diam nulla."
            />
            <InsightPopularCard
              link="/insights/123"
              alt=""
              src="/images/insight-popular.png"
              title="The Cloud Path: Engineering the pathway to success"
              label="Technology"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada nibh diam nulla."
            />
          </div>
        </div>
      </div>

      <div className={styles.newsLetter}>
        <h2>Ready to receive on insights in your mailbox?</h2>
        <p>
          Provide your email address below and we will always send your exciting
          and innnovate messages that keep you ahead of others
        </p>

        <form>
          <div className={styles.formGroup}>
            <Input id="email" name="email" placeholder="Email address" />
          </div>

          <div className={styles.formBtn}>
            <button className="btn-primary btn-small">SUBSCRIBE NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default insightsRead;
