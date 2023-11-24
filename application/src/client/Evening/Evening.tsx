import Layout from "../Layout";
import Header from "../Header";
import EveningBody from "./EveningBody";
import Footer from "../Footer";

function Evening({
  switchValue,
  testerID,
  testeeID,
}: {
  switchValue: string;
  testerID: string;
  testeeID: string;
}) {
  return (
    <>
      <Layout>
        <Header />
        <EveningBody
          switchValue={switchValue}
          testerID={testerID}
          testeeID={testeeID}
        />
        <Footer />
      </Layout>
    </>
  );
}

export default Evening;
