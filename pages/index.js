import Head from "next/head";
import Navbar from "../components/Navigbar";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.scss";
import {
  GiCoffeePot,
  GiCakeSlice,
  GiCroissant,
  GiSlicedBread,
} from "react-icons/gi";
import { SiCoffeescript, SiBuymeacoffee } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <Head>
        <title>coffee shop</title>
      </Head>
      <nav>
        {/* navigation */}
        <Navbar />
      </nav>
      <header className={styles.header}>
        <Slider />
        <div className={styles.hero__overlay}></div>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__text_1}>Friendship cafe</h1>
          <h3 className={styles.hero__text_2}>your coffee social center</h3>
          <a href="#" type="button" className={`${styles.hero__btn} btn`}>
            Learn More
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <section id="coffee-offer" className={styles.offers}>
          <p className={styles.offers_1}>
            we offer great collections of coffee menu{" "}
          </p>
          <h1 className={styles.title}>build your coffee base</h1>

          <div className={styles.offers_base}>
            <ul className={styles.offers_base_ul}>
              <li className={styles.offers_base_rt}>
                <div>
                  <h4>Hot Coffee</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <GiCoffeePot className={styles.offers_base_icon} />
              </li>
              <li className={styles.offers_base_rt}>
                <div>
                  <h4>Cake slices</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <GiCakeSlice className={styles.offers_base_icon} />
              </li>
              <li className={styles.offers_base_rt}>
                <div>
                  <h4>croasssant</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <GiCroissant className={styles.offers_base_icon} />
              </li>
            </ul>
            <img
              src="/images/coffeetogo.png"
              alt=""
              className={styles.offers_base_img}
            />
            <ul>
              <li className={styles.offers_base_lf}>
                <SiCoffeescript className={styles.offers_base_icon} />
                <div>
                  <h4>Coffee in cup</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className={styles.offers_base_lf}>
                <SiBuymeacoffee className={styles.offers_base_icon} />
                <div>
                  <h4>Coffee to go</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className={styles.offers_base_lf}>
                <GiSlicedBread className={styles.offers_base_icon} />
                <div>
                  <h4>Coffee bread</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className={`${styles.gallery} `}>
          <div className={styles.gallery_img3}>
            <img src="/images/coffeefood3.jpg" alt="" />
          </div>
          <div className={styles.gallery_img1}>
            <img src="/images/coffeefood1.jpg" alt="" />
          </div>
          <div className={styles.gallery_img2}>
            <img src="/images/coffeefood2.jpg" alt="" />
          </div>
          <div className={styles.gallery_img4}>
            <img src="/images/coffeefood4.jpg" alt="" />
          </div>
        </section>
      </main>

      <footer>footer</footer>
    </div>
  );
}
