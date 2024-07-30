"use client";

import { Lock1, Profile } from "iconsax-react";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import LoginStat from "./components/LoginStat";
import Link from "next/link";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary text-text-color w-full px-10 mt-6"
    >
      {pending ? "Submitting.." : "Submit"}
    </button>
  );
}

export default function Absen() {
  const [formStat, setFormStat] = useState(null)

  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => setPassword(e.target.value);

  async function submitHandler(formData) {
    try {
      const response = await fetch(
        "api/login",
        {
          method: "POST",
          body: formData
        }
      );
      const responseStat = await response.text()
      console.log(responseStat)
      switch (responseStat) {
        case "valid-success":
          setFormStat("valid-success")
          break;

        case "valid-error":
          setFormStat("valid-error")
          break;

        default:
          setFormStat(null)
          break;
      }
    } catch (error) {
      console.log("error");
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
            action={submitHandler}
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
            <SubmitButton />
            <LoginStat stat={formStat}/>
          </form>
        </div>
      </div>
    </main>
  );
}
