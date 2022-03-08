import React from "react";
import styles from "./styles.module.scss";
import Select from "../../ui/customSelect";
import WebinarCard from "../../ui/webinarCard";
import Pagination from "../../ui/pagination";
import SearchInput from "../../ui/customSearchInput";

const webinarsList = () => {
  return (
    <div className={styles.webinarsList}>
      <div className={styles.wrapper}>
        <div className={styles.filterGrid}>
          <div className={styles.searchBox}>
            <SearchInput
              wrapperClass={styles.searchInput}
              type="text"
              innerLabel
              id="search"
              placeholder="Search Webinar"
            >
              <i className="far fa-search"></i>
            </SearchInput>
          </div>

          <div className={styles.filterBox}>
            <Select id="filterType">
              <option>All Webinar</option>
            </Select>
          </div>

          <div className={styles.yearBox}>
            <Select id="year">
              <option>2021</option>
            </Select>
          </div>
        </div>

        <div className={styles.webinarGrid}>
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Designing for Human Accessibility in a friendly way"
            date="23-24 August"
            host="Mayowa Adegunwa, Falade Sunday"
            href="/webinars/123"
          />
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Human Centered Design 101: creating your style guide"
            date="23-24 August"
            host="Falade Sunday"
            href="/webinars/123"
          />
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Cloud Migration : The Do’s and Dont’s "
            date="23-24 August"
            host="Dr Lucky Onoriode"
            href="/webinars/123"
          />
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Designing for Human Accessibility in a friendly way"
            date="23-24 August"
            host="Mayowa Adegunwa, Falade Sunday"
            href="/webinars/123"
          />
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Designing for Human Accessibility in a friendly way"
            date="23-24 August"
            host="Mayowa Adegunwa, Falade Sunday"
            href="/webinars/123"
          />
          <WebinarCard
            alt=""
            src="/images/webinar-img.png"
            title="Designing for Human Accessibility in a friendly way"
            date="23-24 August"
            host="Mayowa Adegunwa, Falade Sunday"
            href="/webinars/123"
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
    </div>
  );
};

export default webinarsList;
