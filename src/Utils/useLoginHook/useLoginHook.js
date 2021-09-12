import { useEffect, useState } from "react";

export default function useLogin(token) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function checkToken() {
      try {
        const res = token == "111222333aaabbb";
        setError(null);
        setStatus(res);
      } catch (err) {
        setStatus(null);
        setError(err);
      }
    }

    checkToken();
  }, [token]);

  return { status, error };
}
