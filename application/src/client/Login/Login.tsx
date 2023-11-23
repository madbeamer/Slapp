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
        <LoginBody switchValue={switchValue} setSwitchValue={setSwitchValue} />
      </Layout>
    </>
  );
}

export default Login;
