import { useState } from "react";
import Input from "./Input";
import { inputBoxStyle } from "../config/constants";
import Button from "./Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  return (
    <div className="flex-grow container mx-auto mt-10 px-4 sm:px-0">
      <div className="sign-in max-w-3xl mx-auto">
        <h2 style={{ textTransform: "uppercase" }}>Sign in</h2>
        <Input
          placeholder="Email"
          style={inputBoxStyle}
          onChange={({ target: { value } }) => {
            setEmail(value);
            setErr(false);
          }}
        />
        <Input
          placeholder="Password"
          style={inputBoxStyle}
          onChange={({ target: { value } }) => {
            setPassword(value);
            setErr(false);
          }}
        />
        <Button
          {...{
            text: "Log in",
            onClick: () => {
              if (email === "") {
                setErr(true);
              }
              if (password === "") {
                setErr(true);
              }
              console.log(email, password);
              setEmail("");
              setPassword("");
            },
          }}
        />
        {err && <div style={{ color: "red" }}> Fill all the above details</div>}
        <div>
          <a href="#" style={{ textDecoration: "none" }}>
            Create a new account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
