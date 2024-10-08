import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false); // Initialize loader as false
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO make it more easy to understand
    // Simulating a loader (optional: adjust based on your needs)
    // setLoader(true);
    // setTimeout(() => setLoader(false), 500); // Simulate loading for 500ms

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

// Prop validation using prop-types
Protected.propTypes = {
  children: PropTypes.node.isRequired,
  authentication: PropTypes.bool,
};
