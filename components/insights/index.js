import React from "react";
import styles from "./styles.module.scss";
import Select from "../ui/customSelect";
import InsightCard from "../ui/insightCard";
import Pagination from "../ui/pagination";
import InsightPopularCard from "../ui/insightPopularCard";
import Input from "../ui/customInput";

const insightIndex = () => {
  return (
    <div className={styles.insights}>
      <div className={styles.wrapper}>
        <div className={styles.insightLead}>
          <p className={styles.paraLead}>BE INSPIRED</p>
          <h1>The Cloudtician’s Thought</h1>
          <p>
            Read everything that goes on in a Cloudtician’s mind and learn how
            you can better maximize your valuable potential
          </p>
        </div>

        <div className={styles.insightsFilter}>
          <div className={styles.left}>
            <button className={styles.activeFilter}>All</button>
            <button>Technology</button>
            <button>Cloud</button>
          </div>

          <div className={styles.right}>
            <Select id="filter" wrapClass="small">
              <option>This Month</option>
              <option>This Week</option>
            </Select>
          </div>
        </div>

        <div className={styles.insightsGrid}>
          <InsightCard
            link="/insights/123"
            alt=""
            src="/images/insight-img.png"
            title="The Cloud Path: Engineering the pathway to success"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
            label="Technology"
          />
          <InsightCard
            link="/insights/123"
            alt=""
            src="/images/insight-img.png"
            title="The Cloud Path: Engineering the pathway to success"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
            label="Technology"
          />
          <InsightCard
            link="/insights/123"
            alt=""
            src="/images/insight-img.png"
            title="The Cloud Path: Engineering the pathway to success"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
            label="Technology"
          />
          <InsightCard
            link="/insights/123"
            alt=""
            src="/images/insight-img.png"
            title="The Cloud Path: Engineering the pathway to success"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
            label="Technology"
          />
          <InsightCard
            link="/insights/123"
            alt=""
            src="/images/insight-img.png"
            title="The Cloud Path: Engineering the pathway to success"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
            label="Technology"
          />
          <InsightCard
            link="/insights/123"
            alt=""
            src="/images/insight-img.png"
            title="The Cloud Path: Engineering the pathway to success"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
            label="Technology"
          />
          <InsightCard
            link="/insights/123"
            alt=""
            src="/images/insight-img.png"
            title="The Cloud Path: Engineering the pathway to success"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
            label="Technology"
          />
          <InsightCard
            link="/insights/123"
            alt=""
            src="/images/insight-img.png"
            title="The Cloud Path: Engineering the pathway to success"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae dui."
            label="Technology"
          />
        </div>

        <Pagination
          containerClassName="pagination"
          pageCount={10}
          activeClassName="paginate-active"
          disabledClassName="paginate-disabled"
          previousClassName="paginate-previous"
          nextClassName="paginate-next"
        />
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

export default insightIndex;
