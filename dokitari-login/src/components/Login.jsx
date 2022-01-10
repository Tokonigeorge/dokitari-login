import { useState } from "react";

const baseInputStyle =
  "ring-1 ring-gray-500 rounded-md py-2 px-2 focus:outline-none mt-2 text-sm focus:ring-1 focus:ring-blue-400";

const Login = () => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <div className="w-full sm:w-1/3 md:w-1/4">
      <form className="flex flex-col mt-8 w-full ring-1 ring-gray-400 rounded-md px-4 py-5 ">
        <Label id="email" label="Email Address" />
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={emailValue}
          onChange={(e) => setEmail(e.target.value)}
          className={`${baseInputStyle}`}
        />
        <Label id="password" label="Password" />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={passwordValue}
          className={`${baseInputStyle}`}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label id="confirmPassword" label="Confirm Password" />
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          value={checkPassword}
          className={`${baseInputStyle}`}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-200 w-24 text-center rounded-md p-2 text-white font-bold mt-2 place-self-end"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

const Label = ({ id, label }) => {
  return (
    <label htmlFor={id} className="font-semibold mt-2">
      {label}
    </label>
  );
};
