import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
// import Typed from "typed.js";

const HomeHero = () => {
  // const el = useRef(null);
  // const typed = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     strings: ["DREAM", "PASSION"],
  //     typeSpeed: 150,
  //     backSpeed: 150,
  //     showCursor: false,
  //     loop: true,
  //   };

  //   typed.current = new Typed(el.current, options);

  //   return () => {
  //     typed.current.destroy();
  //   };
  // }, []);

  return (
    <section className={`${styles.homeHero} wrapper`}>
      <div className={styles.homeHeroImg}>
        <img
          alt="build in your own way"
          src="/images/Man smiling 23 1.png"
          loading="lazy"
        />
      </div>

      <div className={styles.heroLead}>
        <h1>
          Build your <span className={styles.animatedText}>DREAM</span> in your
          own way
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
          vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
          nibh diam nulla senectus justo, donec etiam. Donec hendrerit
          consequat.
        </p>

        <div className={styles.heroActions}>
          <Link href="/register">
            <a className="btn-small btn-primary">TRY FOR FREE</a>
          </Link>

          <Link href="/pricings">
            <a className="btn-small btn-transparent">VIEW PLANS</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
