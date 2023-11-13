import Layout from "../Layout";
import Header from "../Header";
import LoginBody from "./LoginBody";
import Footer from "../Footer";

function Login() {
  return (
    <>
      <Layout>
        <Header />
        <LoginBody />
        <Footer />
      </Layout>
    </>
  );
}

export default Login;
