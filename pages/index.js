import Head from "next/head";
import Navbar from "../components/Navigbar";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.scss";
import { BsArrowRight } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";
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
          <h1 className={styles.hero__text_1}>Friendship café</h1>
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

        <section className={styles.menu}>
          <div className={styles.hero__overlay}></div>
          <div className={styles.menu_container}>
            <p className={styles.offers_1}>What have we got here </p>
            <h1 className={`${styles.title} ${styles.white}`}>
              explore our menu
            </h1>
            <div className={styles.menu_content}>
              <table>
                <tr>
                  <td>
                    <h5>black coffe</h5>
                    <p>steeped in hot water, served warm</p>
                  </td>
                  <td className={styles.ml}>
                    {" "}
                    <h5>$2.90</h5>
                    <p className={styles.badge}>new</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>coffe latte</h5>
                    <p>espresso and steamed milk with just a touch of foam</p>
                  </td>
                  <td className={styles.ml}>
                    {" "}
                    <h5>$2.50</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Cappuccino</h5>
                    <p>often with a sprinkle of cocoa powder or cinnamon</p>
                  </td>
                  <td className={styles.ml}>
                    {" "}
                    <h5>$3.00</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Americano</h5>
                    <p>espresso shot diluted in hot water</p>
                  </td>
                  <td className={styles.ml}>
                    {" "}
                    <h5>$1.50</h5>
                    <p className={styles.badge}>promo</p>
                  </td>
                </tr>
              </table>
              <table>
                <tr>
                  <td>
                    <h5>Espresso</h5>
                    <p>
                      used as the foundation of most coffee drinks, like lattes
                      and macchiatos
                    </p>
                  </td>
                  <td className={styles.ml}>
                    {" "}
                    <h5>$3.50</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Doppio coffee</h5>
                    <p>A double shot of espresso extra pep</p>
                  </td>
                  <td className={styles.ml}>
                    {" "}
                    <h5>$3.20</h5>
                    <p className={styles.badge}>new</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Macchiato coffee</h5>
                    <p>
                      espresso-based drink that has a small amount of foam on
                      top
                    </p>
                  </td>
                  <td className={styles.ml}>
                    {" "}
                    <h5>$2.00</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Café au Lait</h5>
                    <p>
                      perfect for the coffee minimalist who wants a bit more
                      flavor
                    </p>
                  </td>
                  <td className={styles.ml}>
                    {" "}
                    <h5>$3.00</h5>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>
        <section className={`${styles.franchise} pb-2`}>
          <img src="/images/franch-1.jpeg" alt="" />
          <img src="/images/franch-3.jpeg" alt="" />
          <img src="/images/franch-4.jpeg" alt="" />
          <img src="/images/franch-5.jpeg" alt="" />
        </section>
        <section className={styles.display_main}>
          <div className={styles.display_main1}>
            <h1 className={`${styles.title} pt-4`}>Information board</h1>
            <p className={styles.offers_1}>
              all the information you need here{" "}
            </p>
          </div>
          <div className={styles.display}>
            <div className={styles.display_img1}>
              <h4>Monday special</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo libero sint aut facere voluptatem facilis
              </p>
              <a href="#">
                learn more <BsArrowRight />
              </a>
            </div>
            <div className={styles.display_img2}>
              <h4>top 5 flovour</h4>
              <ul>
                <li>French Vanilla </li>
                <li>Caramel Macchiato </li>
                <li>Pumpkin Spice </li>
                <li>Mocha</li>
                <li>Africano spice</li>
              </ul>
            </div>
            <div className={styles.display_img3}>
              <h4>Local brands </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo libero sint aut facere voluptatem facilis
              </p>
              <a href="#">
                learn more <BsArrowRight />
              </a>
            </div>
            <div className={styles.display_img4}>
              <h4>friends special</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo libero sint aut facere voluptatem facilis
              </p>
            </div>
            <div className={styles.display_img5}>
              <h4>events </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo libero sint aut facere voluptatem facilis
              </p>
            </div>
            <div className={styles.display_img6}>
              <h4>weekend vibs</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo libero sint aut facere voluptatem facilis
              </p>

              <a href="#">
                learn more <BsArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer d-flex flex-wrap justify-content-around">
        <div>
          <h5>opening hours</h5>
          <li>
            <p className="font-weight-bold">Monday</p>
            <p>7:30am - 9:30pm</p>
          </li>
          <li>
            <p className="font-weight-bold">Tuesday</p>
            <p>7:00am - 9:30pm</p>
          </li>
          <li>
            <p className="font-weight-bold">wednesday</p>
            <p>7:30am - 7:30pm</p>
          </li>
          <li>
            <p className="font-weight-bold">thursday</p>
            <p>7:30am - 7:30pm</p>
          </li>
          <li>
            <p className="font-weight-bold">friday</p>
            <p>7:30am - 7:30pm</p>
          </li>
          <li>
            <p className="font-weight-bold">saturday</p>
            <p>7:30am - 4:00pm</p>
          </li>
          <li>
            <p className="font-weight-bold">sunday</p>
            <p>7:30am - 71:00pm</p>
          </li>
        </div>
        <div className="contact">
          <h5>contact us</h5>
          <p>2269 fake address Road</p>
          <p>859-437-2538</p>
          <p>dev@fakeaddress.com </p>
        </div>
        <div className="f-icons">
          <h5>follow us</h5>
          <FaFacebookSquare /> <FaPinterestSquare /> <FaTwitterSquare />
        </div>
      </footer>
      <div className="text-center">Developed by alexooO</div>
    </div>
  );
}
