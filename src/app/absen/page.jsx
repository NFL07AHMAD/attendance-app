"use client";
import React, { useState, useRef, useEffect } from "react";

const MyForm = ({ password, handleChange }) => {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef();

  useEffect(() => {
    if (showNotification) {
      notificationRef.current.style.transform = "translateY(210%)";
    } else {
      notificationRef.current.style.transform = "translateY(0)";
    }
  }, [showNotification]);

  function submitHandle(formData) {
    const password = formData.get("password");
    if (password != "kalall") {
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  }

  function Alert() {
    let style =
      "notif absolute top-10 p-5 duration-1000 transition-all -translate-y-10";
    if (showNotification == false) {
      style =
        "notif absolute top-10 p-5 duration-1000 transition-all translate-y-5";
    }
    return (
      <div className={style}>
        <p className="text-red-300">Password Salah</p>
      </div>
    );
  }
  return (
    <form
      className="container flex flex-col gap-4 justify-center items-center"
      action={submitHandle}
    >
      <input
        type="text"
        name="password"
        className="input-text"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="submit"
        value="Submit"
        className="btn-primary text-text-color w-fit px-10"
      />
      <div ref={notificationRef} className="notif fixed -top-20 transform bg-red-500 text-text-color p-4 rounded shadow-lg transition-transform duration-500 ease-in-out">
        Password Salah
      </div>
    </form>
  );
};

export default function Absen() {
  const [password, setPassword] = useState("");
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <main className="background-dark w-screen h-screen flex flex-col items-center justify-center gap-6">
      <div>
        <h1 className="text-center">Absen</h1>
        <p className="opacity-50 max-w-md text-center">
          Anda harus memasukkan password yang telah diberikan untuk mengakses
          form absen
        </p>
      </div>
      <div>
        if (condition) {}
        <MyForm
          password={password}
          handleChange={(e) => handlePasswordChange(e)}
        />
      </div>
    </main>
  );
}
