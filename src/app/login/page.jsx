"use client";

import { Lock1, Profile } from "iconsax-react";
import { useState } from "react";
import Link from "next/link";
import { submitHandler } from "@/app/actions";

const formStatValue = {
  sending: "sending",
  error: "error",
  unapprove: "unapprove",
  approve: "approve",
  input: "input",
};

export default function Absen() {
  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => setPassword(e.target.value);

  async function handleSubmit(e) {
    try {
      const m = await submitHandler(e);
      console.log(m);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <main className="w-screen h-screen background-dark flex flex-col items-center justify-center">
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
            action={handleSubmit}
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
                  <Profile size={20} variant="Outline" />
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
                  <Lock1 size={20} variant="Outline" />
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
            />
          </form>
        </div>
      </div>
    </main>
  );
}
