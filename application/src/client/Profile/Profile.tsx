import Layout from "../Layout";
import Header from "../Header";
import ProfileBody from "./ProfileBody";
import Footer from "../Footer";

function Profile() {
  return (
    <>
      <Layout>
        <Header />
        <ProfileBody />
        <Footer />
      </Layout>
    </>
  );
}

export default Profile;
