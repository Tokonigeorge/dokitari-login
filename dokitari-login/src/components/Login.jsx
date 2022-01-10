import { useState } from "react";

const baseInputStyle =
  "ring-1 ring-gray-500 rounded-md py-1 px-2 outline-transparent mt-2";

const Login = () => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <div className="w-full sm:w-1/3 md:w-1/4">
      <form className="flex flex-col mt-8 w-full">
        <Label id="email" label="Email Address" />
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={(e) => setEmail(e.target.value)}
          className={`${baseInputStyle}`}
        />
        <Label id="password" label="Password" />
        <input
          type="password"
          id="password"
          value={passwordValue}
          className={`${baseInputStyle}`}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label id="confirmPassword" label="Confirm Password" />
        <input
          type="password"
          id="confirmPassword"
          value={checkPassword}
          className={`${baseInputStyle}`}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

const Label = ({ id, label }) => {
  return (
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
  );
};
