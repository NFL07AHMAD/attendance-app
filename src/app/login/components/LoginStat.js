const LoginStat = ({ stat }) => {
  switch (stat) {
    case "valid-error":
      return <p className="text-red-400 text-center">Nama atau password salah</p>;
    case "net-error":
      return (
        <p className="text-red-400 text-center">
          Gagal mendapatkan respon. Periksa internet anda!
        </p>
      );
    case "valid-success":
      return (
        <p className="text-green-300 text-center">
          Berhasi Login!
        </p>
      );
    default:
      return null;
  }
};

export default LoginStat;
