import React from "react";
import BestGear from "../../components/BestGear/BestGear";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Speaker1 from "../../components/SPEAKER1/Speaker1";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <main className={classes.main}>
      <Header />
      <section className={classes.container}>
        <Speaker1 />
        <BestGear />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
