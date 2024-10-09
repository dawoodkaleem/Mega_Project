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

function Select({ options, label, className, id, ...props }, ref) {
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

export default React.forwardRef(Select);
