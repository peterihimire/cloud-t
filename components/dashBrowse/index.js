import React from "react";
import styles from "./styles.module.scss";
import SearchInput from "../ui/customSearchInput";
import Select from "../ui/customSelect";
import Filter from "./filter";
import Courses from "./courses";

const DashBrowse = () => {
  return (
    <div className={styles.browse}>
      <div className={styles.wrapper}>
        <h1>Browse Courses</h1>

        <div className={styles.form}>
          <SearchInput
            type="text"
            innerLabel
            id="browseSearch"
            placeholder="What do you want to learn?"
            wrapperClass={styles.search}
          >
            <i className="far fa-search"></i>
          </SearchInput>

          <div className={styles.sort}>
            <Select sort defaultValue="" wrapClass={styles.sortDrop}>
              <option value="">SORT BY</option>
              <option value="Platform">PLATFORM</option>
              <option value="Services">SERVICES</option>
              <option value="Skills">SKILLS</option>
            </Select>
          </div>

          <div className={styles.sort}>
            <Select sort defaultValue="" wrapClass={styles.sortDrop}>
              <option value="">SORT BY</option>
              <option value="Platform">PLATFORM</option>
              <option value="Services">SERVICES</option>
              <option value="Skills">SKILLS</option>
            </Select>
          </div>
        </div>

        <div className={styles.browseContent}>
          <Filter />
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default DashBrowse;
