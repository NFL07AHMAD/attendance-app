const LoginStat = ({ stat }) => {
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
        setFormStat("input");
      }, 3000);
      return (
        <div className="absolute card p-10 z-10 flex flex-col items-center justify-center gap-6 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
          <span className="text-5xl">✅</span>
          <p className="text-center">Berhasil Login</p>
        </div>
      );
    case "input":
      return null;
    default:
      return null;
  }
};

export default LoginStat;
