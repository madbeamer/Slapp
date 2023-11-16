import Layout from "../Layout";
import Header from "../Header";
import BlogBody from "./BlogBody";
import Footer from "../Footer";

function Blog() {
  return (
    <>
      <Layout>
        <Header />
        <BlogBody />
        <Footer />
      </Layout>
    </>
  );
}

export default Blog;
