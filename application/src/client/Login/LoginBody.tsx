import "./LoginBody.css";

function LoginBody() {
  return (
    <main className="login-body-container">
      <img className="logo" src="/slapp-logo-ramon.png"></img>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required></input>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default LoginBody;
