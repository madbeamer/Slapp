import Layout from "../Layout";
import Header from "../Header";
import SleepBody from "./SleepBody";
import Footer from "../Footer";
import AtSleep from "./AtSleep";
import { useState } from "react";

function Sleep() {
  const [sleepActivated, setSleepActivated] = useState(false);

  if (!sleepActivated) {
    return (
      <>
        <Layout>
          <Header />
          <SleepBody setSleepActivated={setSleepActivated} />
          <Footer />
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <AtSleep />
      </>
    );
  }
}

export default Sleep;
