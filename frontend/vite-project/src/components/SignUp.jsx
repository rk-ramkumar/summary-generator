import React, { useState } from "react";
import Input from "./Input";
import { inputBoxStyle } from "../config/constants";
import Button from "./Button";
import axios from "axios";
import { endPoints } from "../config/constants";
import { setCookie } from "../utils/cookies";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [err, setErr] = useState(false);
  return (
    <div className="flex-grow container mx-auto mt-10 px-4 sm:px-0">
      <div className="sign-up max-w-3xl mx-auto">
        <h2 style={{ textTransform: "uppercase" }}>Sign up</h2>
        <Input
          value={name}
          placeholder="Name"
          style={inputBoxStyle}
          onChange={({ target: { value } }) => {
            setName(value);
            setErr(false);
          }}
        />
        <Input
          value={email}
          placeholder="Email"
          style={inputBoxStyle}
          onChange={({ target: { value } }) => {
            setEmail(value);
            setErr(false);
          }}
        />
        <Input
          value={password}
          placeholder="Password"
          style={inputBoxStyle}
          onChange={({ target: { value } }) => {
            setPassword(value);
            setErr(false);
          }}
        />
        <Input
          value={confirmPass}
          placeholder="Confirm Password"
          style={inputBoxStyle}
          onChange={({ target: { value } }) => {
            setConfirmPass(value);
            setErr(false);
          }}
        />
        {err && <div style={{ color: "red" }}> Fill all the above details</div>}
        <Button {...{ text: "Sign up", onClick: () => {
          if (password === confirmPass){
            handleSubmit({email, name, password})
          }
        } }} />
      </div>
    </div>
  );
};

export default SignUp;

const handleSubmit = async ({ email, name, password }) => {
  try {
    const res = await axios.post(endPoints.register, { email, password , name});
    var actions = {
      success: () => {
        setCookie(loginCN, crypto.randomUUID())
        window.location.href = "/";
      },
      error: () => {
        alert("User already exists")
        window.location.href = "/login";
      },
    };
    actions[res.data.status]();
  } catch (err) {
    console.log("|Internal ERROR", err);
  }
};
