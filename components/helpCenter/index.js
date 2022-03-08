import React, { useState } from "react";
import styles from "./styles.module.scss";
import SearchInput from "../ui/customSearchInput";
import CustomTabs from "../ui/tabs";
import Faq from "../contactSales/faqs";

const helpCenterIndex = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "ACCOUNT",
      id: 1,
    },
    {
      name: "COURSES",
      id: 2,
    },
    {
      name: "COMMUNITY",
      id: 3,
    },
    {
      name: "AFFILIATE PROGRAM",
      id: 4,
    },
    {
      name: "PRICINGS",
      id: 5,
    },
    {
      name: "BECOMING AN INSTRUCTOR",
      id: 6,
    },
    {
      name: "WEBINARS",
      id: 7,
    },
  ];

  return (
    <div className={styles.helpCenter}>
      <div className={styles.wrapper}>
        <p className={styles.paraLead}>HELP CENTER</p>
        <h1>Knowledge Base</h1>

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

        <CustomTabs
          activeTab={tabIndex}
          clicked={(index) => tabIndexHandler(index)}
          headers={tabHeaders}
        >
          <div className={styles.tabContent}>
            {tabIndex === 1 && <Faq hideHeader />}
          </div>
        </CustomTabs>
      </div>
    </div>
  );
};

export default helpCenterIndex;
