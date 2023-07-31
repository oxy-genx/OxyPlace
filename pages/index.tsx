import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            {/* <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div> */}
          </div>
          
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Ownership brings value
                </span>
                <br />
                <p className="text-4xl">Value Brings Responsibility</p>
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://oxygenx.netlify.app/"
                  target="_blank"
                >
                  OxygenX
                </Link>{" "}
                is a emerging Project that can save the World without any central needs.

There is no PLANET B. The Planet you live-in is only the Planet to survive. But we are rigorously exploiting the Planet because we don't value it.

Here we, Present you the OxygenX Project by Yash Deharia, to solve the biggest REAL WORLD PROBLEM. That will give you the ownership of Plants --<br></br><b>That bring's Value to the Nature</b>.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  <b>Plant | Buy | Sell</b>
                </Link>
                {/* <Link
                  className={styles.secondaryCta}
                  href="https://github.com/thirdweb-example/marketplace-v3"
                  target="_blank"
                >
                  GitHub
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
