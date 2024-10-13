// import React, {} from "react";

// function Select({ options, lable, className, ...props }, ref) {
//   return (
//     <div className="w-full">
//       {lable && <lable htmlFor={id} className=""></lable>}
//       <select {...props} id={id} ref={ref}className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`>
//       {options?.map((options)=>{
//         <option key={option} value={option}>{option}</option>
//       })}
//       </select>
//     </div>
//   );
// }

// export default  React.forwardRef(Select);

import React from "react";
import PropTypes from "prop-types";

const Select = React.forwardRef(
  ({ options, label, className, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block mb-2">
            {label}
          </label>
        )}
        <select
          {...props}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
Select.displayName = "Select";

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  props: PropTypes.object,
};

Select.defaultProps = {
  label: "",
  className: "",
  props: {},
};

export default Select;
