import Layout from "../Layout";
import Header from "../Header";
import LoginBody from "./LoginBody";
import Footer from "../Footer";

function Login({
  switchValue,
  setSwitchValue,
}: {
  switchValue: string;
  setSwitchValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <Layout>
        <Header />
        <LoginBody switchValue={switchValue} setSwitchValue={setSwitchValue} />
        <Footer />
      </Layout>
    </>
  );
}

export default Login;
