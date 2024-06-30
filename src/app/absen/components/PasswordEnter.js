"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Lock1, Profile } from "iconsax-react";

export default function Login() {
  const [isDisable, setIsDisable] = useState(true);
  const [formStat, setFormStat] = useState("input");
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  const [password, setPassword] = useState("");
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (formStat === "input" && username && password) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }

    if (localStorage.getItem("hasLogin") === "true") {
      setShowLogin(false);
    }
  }, [username, password, formStat]);

  const StatComp = ({ stat }) => {
    switch (stat) {
      case "sending":
        return (
          <div className="absolute card p-10 z-10 flex flex-col items-center justify-center gap-6 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
            <span className="text-5xl">⏳</span>
            <p className="text-center">Loading...</p>
          </div>
        );
      case "error":
        return (
          <div className="absolute card p-10 z-10 flex flex-col items-center justify-center gap-6 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
            <span className="text-5xl">❗</span>
            <p className="text-center">Technical Error</p>
            <button
              className="btn-primary justify-self-end"
              onClick={() => setFormStat("input")}
            >
              Try Again
            </button>
          </div>
        );
      case "unapprove":
        return (
          <div className="absolute card p-10 z-10 flex flex-col items-center justify-center gap-6 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
            <span className="text-5xl">❌</span>
            <p className="text-center">Username atau Password Salah</p>
            <button
              className="btn-primary justify-self-end"
              onClick={() => setFormStat("input")}
            >
              Try Again
            </button>
          </div>
        );
      case "approve":
        setTimeout(() => {
          setShowLogin(false);
          setFormStat("input")
        }, 3000);
        return (
          <div className="absolute card p-10 z-10 flex flex-col items-center justify-center gap-6 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
            <span className="text-5xl">✅</span>
            <p className="text-center">Berhasil Login</p>
          </div>
        );
      case "input":
        setIsDisable(false);
        return null;
      default:
        return null;
    }
  };

  const submitHandle = async (formData) => {
    const password = formData.get("password");
    const username = formData.get("username");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzcDo2cchfuxGAzpb_fYB75SsicK4AKCpYrTev0HgBQosMJRotovMiKfpelW3J2jMCpVQ/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            sheetName: "Akun",
            username: username,
            password: password,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.text();
        if (data === "oke") {
          setFormStat("approve");
          localStorage.setItem("hasLogin", "true");
        } else {
          setFormStat("unapprove");
        }
      }
    } catch (error) {
      setFormStat("error");
    }
  };
  return (
    <div className="absolute w-screen h-screen">
      <StatComp stat={formStat} />
      {showLogin && (
        <div className="background-dark w-screen h-screen flex flex-col items-center justify-center gap-12 absolute duration-500 ease-in">
          <div>
            <h2 className="text-center">Login</h2>
            <p className="opacity-50 max-w-md text-center">
              Masukkan username dan password yang sudah diberikan
            </p>
          </div>
          <div>
            <form
              className="container flex flex-col justify-center items-center gap-2 w-[350px]"
              action={submitHandle}
              autoComplete="off"
            >
              <div className="flex flex-col justify-center items-center w-full gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    name="username"
                    className="input-text w-full peer pr-11"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                  />
                  <div className="absolute right-0 top-0 h-full flex items-center pr-4 text-[#3C435D] peer-focus:text-accent-color ease-out duration-200">
                    <Profile size={20} variant="Outline"/>
                  </div>
                </div>
                <div className="w-full relative">
                  <input
                    type="password"
                    name="password"
                    className="input-text w-full peer pr-11"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                  <div className="absolute right-0 top-0 h-full flex items-center pr-4 text-[#3C435D] peer-focus:text-accent-color ease-out duration-200">
                    <Lock1 size={20} variant="Outline"/>
                  </div>
                </div>
              </div>
              <Link
                href="/absen"
                className="text-accent-color self-end text-sm hover:text-accent-color-hover"
              >
                Lupa Password?
              </Link>
              <input
                type="submit"
                value="Submit"
                className="btn-primary text-text-color w-full px-10 mt-6"
                disabled={isDisable}
                onClick={(e) => {
                  setFormStat("sending");
                }}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
