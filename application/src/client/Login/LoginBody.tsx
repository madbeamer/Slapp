import "./LoginBody.css";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function LoginForm() {
  const navigate = useNavigate();
  // Define state variables to store input values
  const [testerValue, setTesterValue] = useState<string>("");
  const [testeeValue, setTesteeValue] = useState<string>("");

  // Event handler to update the state when the input value changes
  const handleTesterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTesterValue(event.target.value);
  };

  const handleTesteeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTesteeValue(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    sessionStorage.setItem("tester", testerValue);
    sessionStorage.setItem("testee", testeeValue);
    navigate("/statistics");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* Input element with an onChange event handler */}
      <div>
        <label htmlFor="tester">Tester:</label>
      </div>
      <div>
        <input
          className="input-field"
          id="tester"
          type="text"
          value={testerValue}
          onChange={handleTesterChange}
          placeholder="Type something..."
          required
        ></input>
      </div>
      <div>
        <label htmlFor="testee:">Testee:</label>
      </div>
      <div>
        <input
          className="input-field"
          id="testee"
          type="text"
          value={testeeValue}
          onChange={handleTesteeChange}
          placeholder="Type something..."
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
      <img className="logo" src="/slapp-logo-ramon.png"></img>
      <LoginForm />
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
