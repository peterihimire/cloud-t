import React from "react";
import styles from "./styles.module.scss";

const faqs = ({ hideHeader }) => {
  const collapseToggler = (e) => {
    e.currentTarget.nextSibling.classList.toggle(styles.show);
    e.currentTarget
      .querySelector(".fa-chevron-down")
      .classList.toggle("fa-rotate-180");
  };

  return (
    <div className={styles.faqsWrapper}>
      {!hideHeader && <h3>Frequently Asked Questions</h3>}

      <div className={styles.faqList}>
        <ul>
          <li>
            <button onClick={collapseToggler}>
              <span>I want to study cloud, where do i start?</span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
          <li>
            <button onClick={collapseToggler}>
              <span>When will I be charged?</span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
          <li>
            <button onClick={collapseToggler}>
              <span>Can I cancel anytime?</span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
          <li>
            <button onClick={collapseToggler}>
              <span>Can I switch between plans?</span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
          <li>
            <button onClick={collapseToggler}>
              <span>Which plan is best for me?</span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <button onClick={collapseToggler}>
              <span>
                Can I download cloudticians learning contents for offline view?
              </span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
          <li>
            <button onClick={collapseToggler}>
              <span>
                I want to sign up for a free 7-days trial, will be charged?
              </span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
          <li>
            <button onClick={collapseToggler}>
              <span>What benefits are available?</span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
          <li>
            <button onClick={collapseToggler}>
              <span>Is there a plan for organisations?</span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
          <li>
            <button onClick={collapseToggler}>
              <span>Can I remove my payment card anytime?</span>
              <i className="far fa-chevron-down"></i>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                viverra malesuada nibh diam nulla senectus justo, donec etiam.
                Donec hendrerit consequat.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default faqs;
