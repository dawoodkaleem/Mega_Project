import {} from "react";
import PropTypes from "prop-types"; // Import PropTypes

function Logo({ width = "100px" }) {
  return <div>Logo</div>;
}

// Add prop validation
Logo.propTypes = {
  width: PropTypes.string, // Expecting a string for width
};

export default Logo;
