import Layout from "../Layout";
import LoginBody from "./LoginBody";

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
        <LoginBody />
      </Layout>
    </>
  );
}

export default Login;
