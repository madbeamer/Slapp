import Layout from "../Layout";
import Header from "../Header";
import MorningBody from "./MorningBody";
import Footer from "../Footer";

function Morning() {
  return (
    <>
      <Layout>
        <Header />
        <MorningBody />
        <Footer />
      </Layout>
    </>
  );
}

export default Morning;
