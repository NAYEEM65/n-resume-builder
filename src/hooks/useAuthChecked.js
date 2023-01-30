import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../features/auth/authSlice";

const useAuthChecked = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");

    if (localAuth) {
      const { token, user } = JSON.parse(localAuth) || {};

      if (token && user) {
        dispatch(signIn({ token, user }));
      }
    }
    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
};

export default useAuthChecked;
