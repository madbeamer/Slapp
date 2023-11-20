import "./LoginBody.css";
import ReactSwitch from "react-switch";

function LoginBody({
  switchValue,
  setSwitchValue,
}: {
  switchValue: string;
  setSwitchValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleSwitchChange = (checked: boolean) => {
    const value = checked ? "B" : "A";
    setSwitchValue(value);
    sessionStorage.setItem("switchValue", value);
  };

  return (
    <main className="login-body-container">
      <ReactSwitch
        onChange={handleSwitchChange}
        checked={switchValue === "B"}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <div>Prototype {switchValue} is selected.</div>
    </main>
  );
}

export default LoginBody;
