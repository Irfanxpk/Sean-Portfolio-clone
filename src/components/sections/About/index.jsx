import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="h-screen w-full"></div>
      <h2>About Me</h2>
      <p>
        I build modern and interactive web applications using React, Tailwind,
        and GSAP.
      </p>
    </section>
  );
};

export default About;
