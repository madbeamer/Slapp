import Layout from "../Layout";
import Header from "../Header";
import EveningBody from "./EveningBody";
import Footer from "../Footer";

function Evening({ switchValue }: { switchValue: string }) {
  return (
    <>
      <Layout>
        <Header />
        <EveningBody switchValue={switchValue} />
        <Footer />
      </Layout>
    </>
  );
}

export default Evening;
