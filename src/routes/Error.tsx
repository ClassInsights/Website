import { useEffect } from "react";
import { useNavigate } from "react-router";

/** Redirect page */
const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return <></>;
};

export default ErrorPage;
