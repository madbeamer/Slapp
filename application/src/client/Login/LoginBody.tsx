import "./LoginBody.css";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";

function LoginForm({
  testerID,
  setTesterID,
  testeeID,
  setTesteeID,
}: {
  testerID: string;
  setTesterID: React.Dispatch<React.SetStateAction<string>>;
  testeeID: string;
  setTesteeID: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  // Event handler to update the state when the input value changes
  const handleTesterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTesterID(event.target.value);
  };

  const handleTesteeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTesteeID(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    sessionStorage.setItem("testerID", testerID);
    sessionStorage.setItem("testeeID", testeeID);
    navigate("/statistics");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* Input element with an onChange event handler */}
      <div>
        <label htmlFor="tester">Tester ID:</label>
      </div>
      <div>
        <input
          className="input-field"
          id="tester"
          type="text"
          value={testerID}
          onChange={handleTesterChange}
          placeholder="e.g. 06"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="testee:">Testee ID:</label>
      </div>
      <div>
        <input
          className="input-field"
          id="testee"
          type="text"
          value={testeeID}
          onChange={handleTesteeChange}
          placeholder="e.g. 02"
          required
        ></input>
      </div>
      {/* <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input
            className="input-field"
            type="email"
            id="email"
            name="email"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
        </div>
        <div>
          <input
            className="input-field"
            type="password"
            id="password"
            name="password"
            required
          ></input>
        </div> */}

      {/* Button to submit the form */}
      <button type="submit" className="submit-button">
        Login
      </button>
    </form>
  );
}

function LoginBody({
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
  const handleSwitchChange = (checked: boolean) => {
    const value = checked ? "B" : "A";
    setSwitchValue(value);
    sessionStorage.setItem("switchValue", value);
  };

  return (
    <main className="login-body-container">
      <img className="logo" src="/slapp-logo-ramon.png"></img>
      <LoginForm
        testerID={testerID}
        setTesterID={setTesterID}
        testeeID={testeeID}
        setTesteeID={setTesteeID}
      />
      <ReactSwitch
        className="mode-switch"
        onChange={handleSwitchChange}
        checked={switchValue === "B"}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#f2ac3c"
        offColor="#1f2f42"
      />
      <div>Prototype {switchValue} is selected.</div>
    </main>
  );
}

export default LoginBody;
