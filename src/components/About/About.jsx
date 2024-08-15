import React from 'react'
import styles from './about.module.css'
import { Link, useNavigate } from "react-router-dom";
  const About = () => {
    return (
      <>
        <section className={styles.container}>
          <div className={styles.inner_container}>
            <p className={styles.title}>About</p>
            <p className={styles.sub_title}>Evangadi Networks</p>
            <div className={styles.paragraph}>
              <p>
                No matter what stage of life you are in, whether you're just
                starting elementary school or being promoted to CEO of a Fortune
                500 company, you have much to offer to those who are trying to
                follow in your footstps.
              </p>
              <br />
              <p>
                Wheather you are willing to share your knowledge or you are just
                looking to meet mentors of you own, please start by joining the
                network here.
              </p>
            </div>
            <Link to={"/"} className={styles.explainbtn}>
              <button>HOW IT WORKS</button>
            </Link>
          </div>
        </section>
      </>
    );
}

export default About