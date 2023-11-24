import Layout from "../Layout";
import LoginBody from "./LoginBody";

function Login({
  switchValue,
  setSwitchValue,
  testerID,
  setTesterID,
  testeeID,
  setTesteeID,
}: {
  switchValue: string;
  setSwitchValue: React.Dispatch<React.SetStateAction<string>>;
  testerID: string;
  setTesterID: React.Dispatch<React.SetStateAction<string>>;
  testeeID: string;
  setTesteeID: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <Layout>
        <LoginBody
          switchValue={switchValue}
          setSwitchValue={setSwitchValue}
          testerID={testerID}
          setTesterID={setTesterID}
          testeeID={testeeID}
          setTesteeID={setTesteeID}
        />
      </Layout>
    </>
  );
}

export default Login;
