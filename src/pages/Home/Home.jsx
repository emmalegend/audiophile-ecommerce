import React from "react";
import BestGear from "../../components/BestGear/BestGear";
import Header from "../../components/Header/Header";
import Speaker1 from "../../components/SPEAKER1/Speaker1";
import classes from "./Home.module.css";
import Collections from "../../components/Collections/Collections";
const Home = () => {
  return (
    <main>
      <Header />
      <section className={classes.container}>
        <Collections />
        <Speaker1 />
        <BestGear />
      </section>
    </main>
  );
};

export default Home;
