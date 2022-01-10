import { useState } from "react";

const Login = () => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  return (
    <div>
      <form>
        <label>Email address</label>
        <br />
        <input
          type="email"
          htmlFor="email"
          value={emailValue}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <br />
        <input
          type="password"
          htmlFor="password"
          value={passwordValue}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          htmlFor="confirmPassword"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
